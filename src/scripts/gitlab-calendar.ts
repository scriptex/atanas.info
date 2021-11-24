import { select, Selection } from 'd3-selection';
import { format as dateFormat } from 'date-fns';

export type ActivityCalendarSVG = Selection<SVGSVGElement, unknown, null, undefined>;

export type ActivityCalendarMonth = Readonly<{
	x: number;
	month: number;
}>;

export type ActivityCalendarGroup = Readonly<{
	day: number;
	date: Date;
	count: number;
}>;

export type ActivityCalendarDay = Readonly<{
	y: number;
	text: 'M' | 'W' | 'F' | 'S';
}>;

export type ActivityCalendarLegendValue = Readonly<{
	min: number;
	title: string;
}>;

export default class GitlabActivityCalendar {
	private d3 = { select };
	private svg: ActivityCalendarSVG;

	private months: ActivityCalendarMonth[] = [];
	private monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	private firstDayOfWeek: number;

	private daySpace = 1;
	private daySize = 15;
	private daySizeWithSpace = this.daySize + this.daySpace * 2;

	private timestampsTmp: Array<ActivityCalendarGroup[]>;

	private weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	private millisecondsPerDay = 1000 * 60 * 60 * 24;

	private firstDayOfWeekChoices = Object.freeze({
		sunday: 0,
		monday: 1,
		saturday: 6
	});

	private legendValues: ActivityCalendarLegendValue[] = [
		{ title: 'No contributions', min: 0 },
		{ title: '1-9 contributions', min: 1 },
		{ title: '10-19 contributions', min: 10 },
		{ title: '20-29 contributions', min: 20 },
		{ title: '30+ contributions', min: 30 }
	];

	constructor(
		container: HTMLElement,
		data: Record<string, number>,
		utcOffset = 0,
		firstDayOfWeek = 0,
		monthsAgo = 12
	) {
		this.firstDayOfWeek = firstDayOfWeek;
		this.timestampsTmp = [];

		let group = 0;

		const today = this.getSystemDate(utcOffset);

		today.setHours(0, 0, 0, 0);

		const timeAgo = new Date(today);

		timeAgo.setMonth(today.getMonth() - monthsAgo);

		const days = this.getDayDifference(timeAgo, today);

		for (let i = 0; i <= days; i += 1) {
			const date = new Date(timeAgo);

			date.setDate(date.getDate() + i);

			const day = date.getDay();

			const count = data[dateFormat(date, 'yyyy-MM-dd')] || 0;

			if ((day === this.firstDayOfWeek && i !== 0) || i === 0) {
				this.timestampsTmp.push([]);
				group += 1;
			}

			const innerArray = this.timestampsTmp[group - 1];

			innerArray.push({ count, date, day });
		}

		this.svg = this.renderSvg(container, group);

		this.renderDays();
		this.renderMonths();
		this.renderDayTitles();
		this.renderKey();
		this.renderHint();
	}

	private getDayName = (date: Date): string => this.weekdayNames[date.getDay()];

	private getDayDifference = (a: Date, b: Date): number => {
		const date1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
		const date2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

		return Math.floor((date2 - date1) / this.millisecondsPerDay);
	};

	private getSystemDate = (systemUtcOffsetSeconds: number): Date => {
		const d = new Date();
		const localUtcOffsetMinutes = 0 - d.getTimezoneOffset();
		const systemUtcOffsetMinutes = systemUtcOffsetSeconds / 60;

		d.setMinutes(d.getMinutes() - localUtcOffsetMinutes + systemUtcOffsetMinutes);

		return d;
	};

	private formatTooltipText = ({ date, count }: { date: Date; count: number }): string => {
		const d = new Date(date);
		const dateText = dateFormat(d, 'MMM d, yyyy');
		const dateDayName = this.getDayName(d);

		let contribText = 'No contributions';

		if (count > 0) {
			contribText = count === 1 ? '1 contribution' : `${count} contributions`;
		}

		return `${contribText} on ${dateDayName} ${dateText}`;
	};

	private getLevelFromContributions = (count: number) => {
		if (count <= 0) {
			return 0;
		}

		const nextLevel = this.legendValues.findIndex(({ min }) => count < min);

		return nextLevel >= 0 ? nextLevel - 1 : this.legendValues.length - 1;
	};

	private getExtraWidthPadding(group: number): number {
		let extraWidthPadding = 0;

		const lastColMonth = this.timestampsTmp[group - 1][0].date.getMonth();
		const secondLastColMonth = this.timestampsTmp[group - 2][0].date.getMonth();

		if (lastColMonth !== secondLastColMonth) {
			extraWidthPadding = 6;
		}

		return extraWidthPadding;
	}

	private renderSvg(container: HTMLElement, group: number): ActivityCalendarSVG {
		const width = (group + 1) * this.daySizeWithSpace + this.getExtraWidthPadding(group);

		return this.d3.select(container).append('svg').attr('width', width).attr('height', 167);
	}

	private dayYPos(day: number): number {
		return this.daySizeWithSpace * ((day + 7 - this.firstDayOfWeek) % 7);
	}

	private renderDays(): void {
		this.svg
			.selectAll('g')
			.data(this.timestampsTmp)
			.enter()
			.append('g')
			.attr('transform', (group: ActivityCalendarGroup[], i: number) => {
				group.forEach((stamp: ActivityCalendarGroup, a: number) => {
					if (a === 0 && stamp.day === this.firstDayOfWeek) {
						const month = stamp.date.getMonth();
						const x = this.daySizeWithSpace * i + 1 + this.daySizeWithSpace;
						const lastMonth = this.months[this.months.length - 1];

						if (
							lastMonth == null ||
							(month !== lastMonth.month && x - this.daySizeWithSpace !== lastMonth.x)
						) {
							this.months.push({ month, x });
						}
					}
				});

				return `translate(${this.daySizeWithSpace * i + 1 + this.daySizeWithSpace}, 18)`;
			})
			.selectAll('rect')
			.data((stamp: ActivityCalendarGroup[]) => stamp)
			.enter()
			.append('rect')
			.attr('x', '0')
			.attr('y', (stamp: ActivityCalendarGroup) => this.dayYPos(stamp.day))
			.attr('width', this.daySize)
			.attr('height', this.daySize)
			.attr('data-level', (stamp: ActivityCalendarGroup) => this.getLevelFromContributions(stamp.count))
			.attr('title', (stamp: ActivityCalendarGroup) => this.formatTooltipText(stamp));
	}

	private renderDayTitles(): void {
		const days: ActivityCalendarDay[] = [
			{
				text: 'M',
				y: 29 + this.dayYPos(1)
			},
			{
				text: 'W',
				y: 29 + this.dayYPos(3)
			},
			{
				text: 'F',
				y: 29 + this.dayYPos(5)
			}
		];

		if (this.firstDayOfWeek === this.firstDayOfWeekChoices.monday) {
			days.push({
				text: 'S',
				y: 29 + this.dayYPos(7)
			});
		} else if (this.firstDayOfWeek === this.firstDayOfWeekChoices.saturday) {
			days.push({
				text: 'S',
				y: 29 + this.dayYPos(6)
			});
		}

		this.svg
			.append('g')
			.selectAll('text')
			.data(days)
			.enter()
			.append('text')
			.attr('text-anchor', 'middle')
			.attr('x', 8)
			.attr('y', (day: ActivityCalendarDay) => day.y)
			.text((day: ActivityCalendarDay) => day.text);
	}

	private renderMonths(): void {
		this.svg
			.append('g')
			.selectAll('text')
			.data(this.months)
			.enter()
			.append('text')
			.attr('x', (date: ActivityCalendarMonth) => date.x)
			.attr('y', 10)
			.text((date: ActivityCalendarMonth) => this.monthNames[date.month]);
	}

	private renderKey(): void {
		this.svg
			.append('g')
			.attr('transform', `translate(18, ${this.daySizeWithSpace * 8 + 16})`)
			.selectAll('rect')
			.data(this.legendValues)
			.enter()
			.append('rect')
			.attr('width', this.daySize)
			.attr('height', this.daySize)
			.attr('x', (_, i) => this.daySizeWithSpace * i)
			.attr('y', 0)
			.attr('data-level', (_, i) => i)
			.attr('title', x => x.title);
	}

	private renderHint(): void {
		this.svg
			.append('g')
			.attr(
				'transform',
				`translate(${this.svg.property('width').baseVal.value}, ${this.daySizeWithSpace * 8 + 25})`
			)
			.append('text')
			.attr('text-anchor', 'end')
			.text('Issues, merge requests, pushes, and comments.');
	}
}
