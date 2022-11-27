import GroupMenu from './GroupMenu';
function Header() {
    return (
        <div className='mainBody-theme-container mainBody-modalshow'>
            <div className='mainHeader--height' style={{ minHeight: 147 }}>
                <header className="mainHeader  mainHeader_temp03">
                    <div className='mainHeader-middle'>
                        <div className='container'>
                            <div className='flex-container-header'>
                                <div className='header-wrap-iconav header-wrap-action menu-gradient'>
                                    <div className='header-action'>
                                        <div className='header-action-item header-action_menu'>
                                            <div className='header-action_text'>
                                                <a className='header-action__link header-action_clicked'>
                                                    <span className='box-icon'>
                                                        <span className='hamburger-menu' aria-hidden="true">
                                                            <span className='bar'>
                                                            </span>
                                                        </span>
                                                        <span className='box-icon--close'>
                                                            <svg viewBox="0 0 19 19" role="presentation">
                                                                <path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule='evenodd'></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span className='box-text'>MENU</span>
                                                </a>
                                                <span className='box-triangle'>
                                                    <svg viewBox="0 0 20 9" role="presentation">
                                                        <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-wrap-logo logo-gradient">
                                    <div className='wrap-logo' itemScope="" itemType="http://schema.org/Organization">
                                        <a href="#" itemProp="url">
                                            <img src="//theme.hstatic.net/200000459373/1000812576/14/logo.png?v=282" alt="OsiFood" className='img-responsive logoimg' />
                                        </a>
                                        <h1 style={{ display: 'none' }}>
                                            <a href="#" itemProp="url">OsiFood</a>
                                        </h1>
                                    </div>
                                </div>
                                <div className='header-wrap-search search-gradient'>
                                    <div className="header-search">
                                        <div className="search-box wpo-wrapper-search">
                                            <form action="/search" className="searchform-product searchform-categoris ultimate-search">
                                                <div className="wpo-search-inner">
                                                    <input type="hidden" name="type" value="product" />
                                                    <input required="" id="inputSearchAuto-3" className="input-search" name="q" maxLength="40" autoComplete="off" type="text" size="20" placeholder='Tìm kiếm sản phẩm...' />
                                                </div>
                                                <button type="submit" className="btn-search btn">
                                                    <svg className="svg search" height="30px" width="30px" viewBox="0 0 24 24"><path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path></svg>
                                                </button>
                                            </form>
                                            <div id="ajaxSearchResults-3" className="smart-search-wrapper ajaxSearchResults" style={{ display: 'none' }}>
                                                <div className="resultsContent"></div>
                                                <div className="search-suggest">
                                                    <p>Gợi ý cho bạn:</p>
                                                    <ul>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-wrap-action action-gradient">
                                    <div className="header-action">
                                        <div className="header-action-item header-action_locale locationContainer">
                                            <div className="header-action_text ">
                                                <a className="header-action__link header-action_clicked" href="#" id="site-locale-handle" aria-label="Khu vực mua hàng" title="Khu vực mua hàng">
                                                    <span className="box-text ">
                                                        <span className="txtnw">Giao hoặc đến lấy tại <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                                        <span className="txtbl shiptoHere"><span className="txt-overflow">288 Phan Văn Trị, Phường 11, Quận Bình Thạnh</span></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="header-action-item header-action_account">
                                            <div className="header-action_text">
                                                <a className="header-action__link   header-action_clicked " href="#" id="site-account-handle" aria-label="Tài khoản" title="Tài khoản">
                                                    <span className="box-icon">
                                                        <svg className="svg-ico-account" viewBox="0 0 1024 1024">
                                                            <path className="path1" d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"></path>
                                                            <path className="path2" d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"></path>
                                                        </svg>
                                                        <span className="box-icon--close">
                                                            <svg viewBox="0 0 19 19" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule="evenodd"></path></svg>
                                                        </span>
                                                    </span>
                                                    <span className="box-text">
                                                        <span className="txtbl">Tài khoản<br /></span>
                                                    </span>
                                                </a>
                                                <span className="box-triangle">
                                                    <svg viewBox="0 0 20 9" role="presentation">
                                                        <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="header-action-item header-action_cart">
                                            <div className="header-action_text">
                                                <a className="header-action__link header-action_clicked " href="#" id="site-cart-handle" aria-label="Giỏ hàng" title="Giỏ hàng">
                                                    <span className="box-icon">
                                                        <svg className="svg-ico-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 -13 456.75885 456" width="456pt">
                                                            <path d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
                                                            <path d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0"></path>
                                                            <path d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
                                                        </svg>
                                                        <span className="box-icon--close">
                                                            <svg viewBox="0 0 19 19" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule="evenodd"></path></svg>
                                                        </span>
                                                        <span className="count-holder">
                                                            <span className="count">0</span>
                                                        </span>
                                                    </span>
                                                    <span className="box-text">
                                                        <span className="txtbl">Giỏ hàng</span>
                                                    </span>
                                                </a>
                                                <span className="box-triangle">
                                                    <svg viewBox="0 0 20 9" role="presentation">
                                                        <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <GroupMenu></GroupMenu>
                </header>
            </div>
        </div >
    );
}
export default Header;