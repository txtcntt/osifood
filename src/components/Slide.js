function Slide() {
    return (
        <div className="section-index-slider">
            <div className="container container-md-pd0">
                <div className="slider-owl owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                        <div className="owl-stage">
                            <div className="owl-item active" style={{ width: 1140 }}>
                                <div className="slider-item">
                                    <div className="slide--image">
                                        <a href="#" title="Banner Thịt cá trứng sữa">
                                            <img className="owl-lazy" src="./images/banners/slide_2_img.jpg" alt="Banner Thịt cá trứng sữa" style={{ opacity: 1 }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev"></button>
                        <button type="button" role="presentation" className="owl-next"></button>
                    </div>
                    <div className="owl-dots">
                        <button role="button" className="owl-dot active" aria-label="1"><span></span></button>
                        <button role="button" className="owl-dot" aria-label="2"><span></span></button>
                        <button role="button" className="owl-dot" aria-label="3"><span></span></button>
                        <button role="button" className="owl-dot" aria-label="4"><span></span></button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Slide;