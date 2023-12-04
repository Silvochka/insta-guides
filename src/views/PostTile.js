import './GuideTile.css';
import './PostTile.css';

const covers = require.context('../../public/images', true);

function PostTile({ guideId, post }) {
    try {
        covers(`./${guideId}/post_${post.id}.jpeg`);
    } catch {
        return <div />;
    }

    let coverSrc = covers(`./${guideId}/post_${post.id}.jpeg`);
    return (
        <a className="GuideTile" href={post.link}>
            <div style={{ backgroundImage: `url(${coverSrc})` }} className="CoverImage" />
            <div className="CoverGradient" />
            <div className="TitleWrapper" >
                <div className="TitleNameWrapper" >
                    <div className="TitleTextWrapper" >
                        {post.title}
                    </div>
                </div>
            </div>
            {post.type == 'reel' &&
                <div className="ReelMarkWrapper">
                    <svg aria-label="Video" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Video</title><path d="M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z"></path></svg>
                </div>
            }

        </a>
    );
}

export default PostTile;
