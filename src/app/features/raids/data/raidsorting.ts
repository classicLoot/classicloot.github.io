import { wowRaid } from "src/app/shared/interfaces/raids";

export interface wowRaidSorted extends wowRaid {
    leftGroup: wowItemPackage[],
    rightGroup: wowItemPackage[]
}

export interface wowItemPackage {
    title: string,
    ids: number[]
}

export function sortRaids(raid: wowRaid): wowRaidSorted {
    switch (raid.type) {
        case 'A':
            {
                return {
                    ...raid,
                    leftGroup: [],
                    rightGroup: []
                };
            }

        default: {
            return {
                ...raid,
                leftGroup: [],
                rightGroup: []
            };
        }
    }
}