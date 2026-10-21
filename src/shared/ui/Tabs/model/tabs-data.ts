import { TabItem } from "./tabs-types";

export const tabs: TabItem[] = [
  {
    id: 'description',
    label: 'Description',
    content: [
      {
        type: 'title',
        title: 'Product Description',
      },
      {
        type: 'list',
        text:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.',
        list: [
          'Donec nec justo eget felis facilisis fermentum.',
          'Suspendisse urna viverra non, semper suscipit pede.'
        ]
      },
      {
        type: 'paragraph',
        paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
      }
    ],
  },
  {
    id: 'information',
    label: 'Additional information',
    content: [
      {
        type: 'title',
        title: 'Additional Information',
      },
      {
        type: 'list',
        text: 'Product specifications',
        list: [
          'Material: Premium cotton',
          'Color: Black',
          'Weight: 500 g',
          'Warranty: 12 months',
        ],
      },
      {
        type: 'paragraph',
        paragraph:
          'Specifications may vary depending on the selected product variant.',
      },
    ],
  },
  {
    id: 'reviews',
    label: 'Reviews',
    content: [
      {
        type: 'title',
        title: 'Customer Reviews',
      },
      {
        type: 'paragraph',
        paragraph:
          'Customers appreciate the product quality, practical design, and comfort.',
      },
    ],
  },
];