import './GuideTile.css';

const covers = require.context('../../public/images/covers', true);

function GuideTile({ guide }) {
    try {
        covers(`./guide-${guide.id}.jpeg`);
    } catch {
        return <div />;
    }

    let coverSrc = covers(`./guide-${guide.id}.jpeg`);
    console.log(coverSrc);
    return (
        <div className="GuideTile">
            <div style={{ backgroundImage: `url(${coverSrc})` }} className="CoverImage" />
            <div className="CoverGradient" />
            <div className="TitleWrapper" >
                <div className="TitleNameWrapper" >
                    <div className="TitleTextWrapper" >
                        {guide.title}
                    </div>
                </div>
            </div>

        </div>);
}

export default GuideTile;
