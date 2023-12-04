import './GuideTile.css';

const covers = require.context('../../public/images/covers', true);

function GuideTile({ guide, onClick }) {
    try {
        covers(`./guide-${guide.id}.jpeg`);
    } catch {
        return <div />;
    }

    let coverSrc = covers(`./guide-${guide.id}.jpeg`);
    return (
        <div className="GuideTile" onClick={() => onClick(guide)}>
            <div style={{ backgroundImage: `url(${coverSrc})` }} className="CoverImage" />
            <div className="CoverGradient" />
            <div className="TitleWrapper" >
                {guide.posts != null &&
                    <div className="TitleCountWrapper" >
                        <div className="TitleNumberWrapper" >
                            {guide.posts.length} items
                        </div>
                    </div>
                }
                <div className="TitleNameWrapper" >
                    <div className="TitleTextWrapper" >
                        {guide.title}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GuideTile;
