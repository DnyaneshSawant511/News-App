import image from '../assets/def_img.jpg';

const Newsitem = ({title, description, src, url}) => {
    return (
        <div>

            <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
                <img src={src?src:image} style={{height:"250px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 50)}</h5>
                    <p className="card-text">{description?description.slice(0, 90):"Nothing to show."}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>

        </div>
    )
}

export default Newsitem;