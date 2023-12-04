import PostTile from "./PostTile";
import GuideTile from "./GuideTile";

function GuideView({ parentGuideId, guides, posts, onItemSelected }) {

  return (<>
    {guides.map(guide => (
      <GuideTile key={`guide_${guide.id}`} guide={guide} onClick={onItemSelected}></GuideTile>
    ))}
    {posts.map(post => (
      <PostTile guideId={parentGuideId} post={post} key={`guide_${parentGuideId}_post_${post.id}`} ></PostTile>
    ))}
  </>
  );
}

export default GuideView;
