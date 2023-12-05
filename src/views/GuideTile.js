import './GuideTile.css';

const covers = require.context('../../public/images', true);

function getCount(guide) {
    return (guide.posts?.length ?? 0) + (guide.guides?.reduce((acc, curValue) => acc + getCount(curValue), 0) ?? 0);
}

function GuideTile({ guide, onClick }) {
    const imagePath = `./${guide.id}/cover.jpeg`;
    try {
        covers(imagePath);
    } catch {
        return null;
    }

    let coverSrc = covers(imagePath);
    let count = getCount(guide);
    return (
        <div className="GuideTile" onClick={() => onClick(guide)}>
            <div style={{ backgroundImage: `url(${coverSrc})` }} className="CoverImage" />
            <div className="CoverGradient" />
            <div className="TitleWrapper" >
                {count > 0 &&
                    <div className="TitleCountWrapper" >
                        <div className="TitleNumberWrapper" >
                            {count} post{count > 1 ? 's' : '' }
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
