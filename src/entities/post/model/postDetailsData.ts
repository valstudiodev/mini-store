import type { PostDetailsData } from '../model/post-types'
import BlogPost from '@/assets/img/blogPost/blog-post-img.jpg'

export const postDetailsData: PostDetailsData = {
  content: [
    {
      type: 'paragraph',
      paragraphs: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur facilisis vivamus massa magna. 
          Blandit mauris libero condimentum commodo morbi consectetur sociis convallis sit. 
          Magna diam amet justo sed vel dolor et volutpat integer. Iaculis sit sapien hac odio elementum egestas neque. 
          Adipiscing purus euismod orci sem amet, et. Turpis erat ornare nisi laoreet est euismod.`,

        `Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. 
          Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis. 
          Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. 
          Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. 
          Praesent imperdiet vitae eu, eu tincidunt nunc integer sit.`,
      ]
    },
    {
      type: 'quote',
      text: `“Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. 
            Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. “`
    },
    {
      type: 'contentList',
      title: 'Are you amazed ?',
      list: [
        'Blandit mauris libero condimentum commodo sociis convallis sit. ',
        'Magna diam amet justo sed vel dolor et volutpat integer. ',
        'Laculis sit sapien hac odio elementum egestas neque. '
      ],
      paragraphs: [
        `Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis.Urna in sollicitudin in vestibulum erat.
        Turpis faucibus augue ipsum, at aliquam.Cras sagittis tellus nunc integer vitae neque bibendum eget.
        Tempus malesuada et pellentesque maecenas.Sociis porttitor elit tincidunt tellus sit ornare.Purus ut ipsum, enim lacus.`,

        `Tortor diam dignissim amet, in interdum aliquet.Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin.
        Nascetur libero elementum adipiscing mauris maecenas et magna.Etiam nec, rutrum a diam lacus, nunc integer etiam.Mattis pulvinar non viverra donec pellentesque.
        Odio mi consequat libero dolor.Porta ut diam lobortis eget leo, lectus.Nunc tempus feugiat massa laoreet ultrices diam magna quam.Congue auctor auctor luctus neque.
        Enim lorem ultrices diam donec.Sed id placerat consectetur faucibus.`
      ]
    },
    {
      type: 'imageContent',
      image: BlogPost,
      title: 'Velit, praesent pharetra malesuada ',
      paragraphs: [
        `Id pulvinar amet. Consequat potenti mollis massa iaculis et, dolor, eget lectus. Aliquam pellentesque molestie felis fames sed eget non euismod eget. 
        Et eget ullamcorper urna, elit ac diam tellus viverra lacus. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus malesuada et pellentesque maecenas.`,

        `Tortor diam dignissim amet, in interdum aliquet.
        Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. 
        Nascetur libero elementum adipiscing mauris maecenas et magna. 
        Etiam nec, rutrum a diam lacus, nunc integer etiam.
        Mattis pulvinar non viverra donec pellentesque. 
        Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Urna in sollicitudin in vestibulum erat.
        Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget.
        Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare.
        Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt nunc integer sit.`
      ]
    },
    {
      type: 'text',
      paragraphs: [
        `Velit, praesent pharetra malesuada id pulvinar amet. Consequat potenti mollis massa iaculis et, dolor, eget lectus. 
        Aliquam pellentesque molestie felis fames sed eget non euismod eget. Et eget ullamcorper urna, elit ac diam tellus viverra lacus.`,

        `Tortor diam dignissim amet, in interdum aliquet.Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin.
        Nascetur libero elementum adipiscing mauris maecenas et magna.Etiam nec, rutrum a diam lacus, nunc integer etiam.Mattis pulvinar non viverra donec pellentesque.
        Odio mi consequat libero dolor.Porta ut diam lobortis eget leo, lectus.`
      ]
    }
  ],
}





