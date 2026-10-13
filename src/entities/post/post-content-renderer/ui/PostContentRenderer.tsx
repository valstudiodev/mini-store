import { PostContentBlock } from "../../model/post-types";
import '../styles/post-content-renderer.scss';

interface PostContentRendererProps {
  block: PostContentBlock;
}

function PostContentRenderer({
  block,
}: PostContentRendererProps): React.JSX.Element {
  const postContentParagraph = 'post-content-paragraph'
  const postContentQuote = 'post-content-quote'
  const postContentList = 'post-content-list'
  const postContentImage = 'post-content-image'
  const postContentText = 'post-content-text'

  switch (block.type) {
    case 'paragraph':
      return (
        <div className={postContentParagraph}>
          {block.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`${postContentParagraph}__text`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      )

    case 'quote':
      return (
        <blockquote className={postContentQuote}>
          {block.text}
        </blockquote>
      )

    case 'contentList':
      return (
        <section className={postContentList}>
          <h3 className={`${postContentList}__title`}>{block.title}</h3>

          <ul className={`${postContentList}__list`}>
            {block.list.map((item, index) => (
              <li
                key={index}
                className={`${postContentList}__item`}
              >
                {item}
              </li>
            ))}
          </ul>

          {block.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`${postContentList}__paragraph`}
            >
              {paragraph}
            </p>
          ))}
        </section>
      )

    case 'imageContent':
      return (
        <section className={postContentImage}>
          <div className={`${postContentImage}__image`}>
            <img
              src={block.image}
              alt={block.title}
            />
          </div>

          <div className={`${postContentImage}__content`}>
            <h3 className={`${postContentImage}__title`}>{block.title}</h3>
            {block.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${postContentImage}__paragraph`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )

    case 'text':
      return (
        <section className={postContentText}>
          {block.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`${postContentText}__paragraph`}
            >
              {paragraph}
            </p>
          ))}
        </section>
      )
  }
}

export default PostContentRenderer;