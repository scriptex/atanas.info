type Navigator = NavigatorNetworkInformation;
type WorkerNavigator = NavigatorNetworkInformation;

declare interface NavigatorNetworkInformation {
	readonly connection?: NetworkInformation;
	readonly mozConnection?: NetworkInformation;
	readonly webkitConnection?: NetworkInformation;
}

type Megabit = number;
type Millisecond = number;
type EffectiveConnectionType = '2g' | '3g' | '4g' | 'slow-2g';
type ConnectionType = 'bluetooth' | 'cellular' | 'ethernet' | 'mixed' | 'none' | 'other' | 'unknown' | 'wifi' | 'wimax';

interface NetworkInformation extends EventTarget {
	readonly downLink?: Megabit;
	readonly downLinkMax?: Megabit;
	readonly effectiveType?: EffectiveConnectionType;
	onchange?: EventListener;
	readonly rtt?: Millisecond;
	readonly saveData?: boolean;
	readonly type?: ConnectionType;
}
