import { wowItem } from "../../app/shared/interfaces/item";
import { readFromDirAs } from "../helper";
import { fetchIcons } from "../icons";

const itemsArray = readFromDirAs<wowItem>('../assets/items/');

const iconSet = new Set<string>();

itemsArray.forEach(item => {
    iconSet.add(item.icon);
})
const iconNameArray: string[] = Array.from(iconSet.values());

fetchIcons(iconNameArray, 'large');
