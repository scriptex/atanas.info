# Comparing DNS Records: DMARC, SPF, and DKIM Differences

[![Written By a Human Being](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/written-by-a-human-being/main/badge.json)](https://github.com/scriptex/written-by-a-human-being)

DNS records play a crucial role in email authentication, ensuring that emails are sent from authorized sources and are not tampered with during the sending or forwarding process. DMARC, SPF, and DKIM are three key DNS records used for email security, but it is a challenge to identify when these records change, when they contain syntax errors and when a DNS string may not conform to the strict standards. Finding differences between DNS records versions effectively poses unique challenges because without distinguishing between the record types we are just comparing strings.

I recently developed a solution which improves accuracy of custom DNS records, identifies hard to notice changes in them and helps solve for comparing DNS strings by applying custom algorithms to find differences when records **change**.

My implementation of finding the differences between DMARC, SPF, and DKIM records is built using the [`js-diff`](https://github.com/kpdecker/jsdiff) library. In this post, I'll walk you through the challenges involved, the solutions I implemented, and tips for anyone struggling with similar problems. These difference functions power a web app UI that highlights detected changes.

## Understanding the Problem

### DMARC, DKIM, and SPF: What Makes Them Different?

Each of these records serves a different purpose in email authentication:

- **DMARC (Domain-based Message Authentication, Reporting, and Conformance)**: Defines policies for handling unauthorized emails and includes reporting email addresses.
- **DKIM (DomainKeys Identified Mail)**: Uses cryptographic signatures to verify that an email hasn’t been altered in transit.
- **SPF (Sender Policy Framework)**: Specifies which mail servers are allowed to send emails on behalf of a domain.

### Why Finding Differences in These Records is Challenging

Each type of record has its own structure, and a generic text diff algorithm is not sufficient. Even the algorithms provided by the `js-diff` library weren’t sufficient to cover all use cases. Key challenges include:

- **DMARC Record Diff Challenges**
    - **Email addresses need to be preserved**: When finding differences in DMARC records, we mask email addresses temporarily to ensure that any single-character difference in them is detected, marking the entire email as changed.
    - **Whitespace and formatting variations**: DMARC records might contain spaces or line breaks that don’t affect functionality but could be mistakenly flagged as differences.
- **DKIM Record Diff Challenges**
    - **Key-Value Structure**: DKIM records consist of multiple `key=value` pairs.
    - **Whole-value difference**s: If even one character in a value changes, the entire value should be marked as different, rather than showing a character-level diff.
- **SPF Record Diff Challenges**
    - **Complex structure**: SPF records contain mechanisms, IP lists, and include statements, which need to be handled separately.
    - **Order-independent elements**: Some SPF components may change order without affecting functionality.
    - **Handling special SPF endings**: ~all, -all, +all, and ?all need to be preserved correctly.

## Breaking Down the Algorithms

### DMARC Record Difference Algorithm

The algorithm follows these steps:

1. **Mask email addresses** using a placeholder so that if even one character changes, the entire email is marked as different.
2. **Use `js-diff`'s `diffWordsWithSpace` method** to detect changes efficiently.
3. **Replace placeholders** with the original email addresses before returning the final diff result.

Example: DMARC Record Comparison

```txt
# Old Record:

v=DMARC1; p=reject; rua=mailto:admin@example.com; ruf=mailto:forensics@example.com
```

```txt
# New Record

v=DMARC1; p=reject; rua=mailto:admin@example.org; ruf=mailto:forensics@example.com
```

```diff
# Detected Difference:
# (entire email marked as changed)

- rua=mailto:admin@example.com
+ rua=mailto:admin@example.org
```

### DKIM Record Difference Algorithm

The algorithm follows these steps:

1. **Split records into `key=value` pairs.**
2. **Compare values** for each key using `js-diff`, treating the entire value as different if even a single character changes.
3. **Identify and highlight missing or new key-value pairs.**

Example: DKIM Record Comparison

```txt
# Old Record:

k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQ...
```

```txt
# New Record

k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIICCgKCAQ...
```

```diff
# Detected Difference:
# (entire value marked as changed)

- p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQ...
+ p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIICCgKCAQ...
```

### SPF Record Difference Algorithm

The algorithm follows these steps:

1. **Tokenize SPF records** into mechanisms, IP lists, and separators.
2. **Compare IP lists separately** using `js-diff` to detect removed or added IPs.
3. **Preserve the order-sensitive and order-independent elements accordingly.**
4. **Ensure special endings (`~all`, `-all`, etc.) are handled correctly.**

Example: SPF Record Comparison

```txt
# Old Record:

v=spf1 ip4:192.168.1.1 include:_spf.google.com ~all
```

```txt
# New Record

v=spf1 ip4:192.168.1.2 include:_spf.google.com -all
```

```diff
# Detected Difference:

# IP Change detected
- ip4:192.168.1.1
+ ip4:192.168.1.2

# Policy change detected
- ~all
+ -all
```

## Best Practices & Lessons Learned

- **Use `js-diff` methods tailored to each record type** instead of a general diff approach.
- Preserve meaningful changes while ignoring non-functional formatting differences.
- **Test with real-world examples** to handle edge cases.
- **Consider extending these methods to track historical changes over time.**

By applying structured comparison techniques tailored to each record type, you can detect meaningful changes efficiently while avoiding false positives.

### Final Thoughts

Handling DNS record differences is critical for maintaining email security. These algorithms, powered by `js-diff`, provide a structured approach to detecting changes in DMARC, DKIM, and SPF records efficiently. The results are visualized in a web app UI to make differences clear and actionable.

If you're working on email security, I encourage you to experiment with these methods and adapt them to your needs.
