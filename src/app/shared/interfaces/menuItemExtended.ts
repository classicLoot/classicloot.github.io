import { NbMenuItem } from "@nebular/theme";

export interface menuItemExtended extends NbMenuItem {
    titleTwo?: string,
    children?: menuItemExtended[]
    linkTwo?: string
}