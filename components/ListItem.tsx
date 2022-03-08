import React, { useEffect } from 'react';
import classNames from 'classnames';
import ItemStyles from '../styles/ListItem.module.scss'
import { ListItemPropsInterface } from '../interfaces/listItem.inteface';


const ListItem = ({ item }: ListItemPropsInterface) => {
    return (
        <div className={classNames(ItemStyles.listItem, ItemStyles.slideUp, 'bordered')}>
            <div className={item.selected ? classNames(ItemStyles.checkbox, ItemStyles.checked) : classNames(ItemStyles.checkbox)}></div>
            <div>{item.content}</div>
        </div>
    )
}

export default ListItem;