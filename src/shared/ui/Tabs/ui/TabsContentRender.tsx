import { TabsContentBlock } from "../model/tabs-types";
import '../styles/tabs.scss';

interface TabsContentRenderProps {
  block: TabsContentBlock
}

function TabsContentRender({
  block
}: TabsContentRenderProps) {
  const tabsBlock = 'tabs-block'

  switch (block.type) {
    case 'title':
      return (
        <h3 className={`${tabsBlock}__title`}>
          {block.title}
        </h3>
      )

    case 'list':
      return (
        <>
          <p>{block.text}</p>
          <ul className={`${tabsBlock}__list`}>
            {block.list?.map((item) => (
              <li
                key={item}
                className={`${tabsBlock}__item`}
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      )

    case 'paragraph':
      return (
        <p className={`${tabsBlock}__text`}>
          {block.paragraph}
        </p>
      )
  }
}

export default TabsContentRender;