import { useState } from 'react';
import '../styles/tabs.scss';
import { TabsProps } from '../model/tabs-types';
import TabsContentRender from './TabsContentRender';

function Tabs({
  tabs,
  defaultActiveId
}: TabsProps): React.JSX.Element {
  const clTabs = 'tabs'

  const [activeTabId, setActiveTabId] = useState<string>(
    defaultActiveId ?? tabs[0]?.id ?? ''
  );

  const activeTab = tabs.find(
    (tab) => tab.id === activeTabId
  )

  return (
    <div
      role='tablist'
      className={clTabs}>
      <div className={`${clTabs}__actions`}>
        {tabs.map((tab) => (
          <button
            id={`${clTabs}-tab-${tab.id}`}
            key={tab.id}
            type='button'
            role='tab'
            // aria-selected={tab.id === activeTab}
            onClick={() => setActiveTabId(tab.id)}
            className={`${clTabs}__btn  ${tab.id === activeTabId ? `${clTabs}__btn--active` : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        id={`${clTabs}--panel`}
        role='tabpanel'
        aria-labelledby={`${clTabs}-tab-${activeTabId}`}
        className={`${clTabs}__content`}>
        {activeTab?.content.map((tab) => (
          <TabsContentRender block={tab} />
        ))}
      </div>

    </div >
  );
}

export default Tabs;