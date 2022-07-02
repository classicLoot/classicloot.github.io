import { ItemVisibilityPipe } from '../../app/shared/pipes/item-visibility.pipe';
import { wowClass } from '../../app/shared/types/options';
import { readIDsAsItems } from '../helper';

testItemVisPipe([39275, 39274, 40625, 40626, 40627], ['Druid']);

function testItemVisPipe(ids: number[], classes: wowClass[]) {
    const itemVisPipe = new ItemVisibilityPipe();

    const items = readIDsAsItems(ids);
    items.forEach(item => {
        classes.forEach(wowclass => {
            const isVisible = itemVisPipe.transform(item, wowclass);
            console.log(item.name, '=>', wowclass, isVisible);
        })
    })
}

