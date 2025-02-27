import React from "react";
import { appleTouchICon, favicon } from "../../img";
import { Blog1, Blog2, Blog3, Blog4, BlogRecent1, BlogRecent2, BlogRecent3, BlogRecent4, BlogRecent5 } from "../../img/blog";
import { Link } from "react-router-dom";

const Blog = () => {
    return(
        <>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>Blog - Skripsi</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            {/* Favicons */}
            <link href={favicon} rel="icon" />
            <link href={appleTouchICon} rel="apple-touch-icon" />
            {/* Fonts */}
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            {/* Vendor CSS Files */}
            <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link
                href="../../vendor/bootstrap-icons/bootstrap-icons.css"
                rel="stylesheet"
            />
            <link href="../../vendor/aos/aos.css" rel="stylesheet" />
            <link href="../../vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
            <link href="../../vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
            {/* Main CSS File */}
            <link href="../../../App.css" rel="stylesheet" />

            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet"></link>

            <main className="main">
            <>
            <div className="page-title">
                <div className="heading">
                <div className="container">
                    <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-8">
                        <h1>Blog</h1>
                        <p className="mb-0">
                        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                        quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                        dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                        quaerat ipsum dolorem.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <nav className="breadcrumbs">
                <div className="container">
                    <ol>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="current">Blog</li>
                    </ol>
                </div>
                </nav>
            </div>
            {/*
            */}
            </>

                {/* End Page Title */}
                <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    {/* Blog Posts Section */}
                    <section id="blog-posts" className="blog-posts section">
                        <div className="container">
                        <div className="row gy-4">
                            <div className="col-12">
                            <article>
                                <div className="post-img">
                                <img
                                    src={Blog1}
                                    alt=""
                                    className="img-fluid"
                                />
                                </div>
                                <h2 className="title">
                                <Link to="/blog-details">
                                    Dolorum optio tempore voluptas dignissimos cumque fuga
                                    qui quibusdam quia
                                </Link>
                                </h2>
                                <div className="meta-top">
                                <ul>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-person" />{" "}
                                    <Link to="/blog-details">John Doe</Link>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-clock" />{" "}
                                    <Link to="/blog-details">
                                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                                    </Link>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-chat-dots" />{" "}
                                    <Link to="/blog-details">12 Comments</Link>
                                    </li>
                                </ul>
                                </div>
                                <div className="content">
                                <p>
                                    Similique neque nam consequuntur ad non maxime aliquam
                                    quas. Quibusdam animi praesentium. Aliquam et laboriosam
                                    eius aut nostrum quidem aliquid dicta. Et eveniet enim.
                                    Qui velit est ea dolorem doloremque deleniti aperiam
                                    unde soluta. Est cum et quod quos aut ut et sit sunt.
                                    Voluptate porro consequatur assumenda perferendis
                                    dolore.
                                </p>
                                <div className="read-more">
                                    <Link to="/blog-details">Read More</Link>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* End post list item */}
                            <div className="col-12">
                            <article>
                                <div className="post-img">
                                <img
                                    src={Blog2}
                                    alt=""
                                    className="img-fluid"
                                />
                                </div>
                                <h2 className="title">
                                <Link to="/blog-details">
                                    Nisi magni odit consequatur autem nulla dolorem
                                </Link>
                                </h2>
                                <div className="meta-top">
                                <ul>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-person" />{" "}
                                    <Link to="/blog-details">John Doe</Link>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-clock" />{" "}
                                    <Link to="/blog-details">
                                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                                    </Link>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-chat-dots" />{" "}
                                    <Link to="/blog-details">12 Comments</Link>
                                    </li>
                                </ul>
                                </div>
                                <div className="content">
                                <p>
                                    Incidunt voluptate sit temporibus aperiam. Quia vitae
                                    aut sint ullam quis illum voluptatum et. Quo libero
                                    rerum voluptatem pariatur nam. Ad impedit qui officiis
                                    est in non aliquid veniam laborum. Id ipsum qui aut. Sit
                                    aliquam et quia molestias laboriosam. Tempora nam odit
                                    omnis eum corrupti qui aliquid excepturi molestiae.
                                    Facilis et sint quos sed voluptas. Maxime sed tempore
                                    enim omnis non alias odio quos distinctio.
                                </p>
                                <div className="read-more">
                                    <Link to="/blog-details">Read More</Link>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* End post list item */}
                            <div className="col-12">
                            <article>
                                <div className="post-img">
                                <img
                                    src={Blog3}
                                    alt=""
                                    className="img-fluid"
                                />
                                </div>
                                <h2 className="title">
                                <Link to="/blog-details">
                                    Possimus soluta ut id suscipit ea ut. In quo quia et
                                    soluta libero sit sint.
                                </Link>
                                </h2>
                                <div className="meta-top">
                                <ul>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-person" />{" "}
                                    <Link to="/blog-details">John Doe</Link>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-clock" />{" "}
                                    <Link to="/blog-details">
                                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                                    </Link>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-chat-dots" />{" "}
                                    <Link to="/blog-details">12 Comments</Link>
                                    </li>
                                </ul>
                                </div>
                                <div className="content">
                                <p>
                                    Aut iste neque ut illum qui perspiciatis similique
                                    recusandae non. Fugit autem dolorem labore omnis et. Eum
                                    temporibus fugiat voluptate enim tenetur sunt omnis.
                                    Doloremque est saepe laborum aut. Ipsa cupiditate ex
                                    harum at recusandae nesciunt. Ut dolores velit.
                                </p>
                                <div className="read-more">
                                    <Link to="/blog-details">Read More</Link>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* End post list item */}
                            <div className="col-12">
                            <article>
                                <div className="post-img">
                                <img
                                    src={Blog4}
                                    alt=""
                                    className="img-fluid"
                                />
                                </div>
                                <h2 className="title">
                                <Link to="/blog-details">
                                    Non rem rerum nam cum quo minus. Dolor distinctio
                                    deleniti explicabo eius exercitationem.
                                </Link>
                                </h2>
                                <div className="meta-top">
                                <ul>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-person" />{" "}
                                    <Link to="/blog-details">John Doe</Link>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-clock" />{" "}
                                    <Link to="/blog-details">
                                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                                    </Link>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <i className="bi bi-chat-dots" />{" "}
                                    <Link to="/blog-details">12 Comments</Link>
                                    </li>
                                </ul>
                                </div>
                                <div className="content">
                                <p>
                                    Aspernatur rerum perferendis et sint. Voluptates
                                    cupiditate voluptas atque quae. Rem veritatis rerum enim
                                    et autem. Saepe atque cum eligendi eaque iste omnis a
                                    qui. Quia sed sunt. Ea asperiores expedita et et
                                    delectus voluptates rerum. Id saepe ut itaque quod qui
                                    voluptas nobis porro rerum. Quam quia nesciunt qui aut
                                    est non omnis. Inventore occaecati et quaerat magni
                                    itaque nam voluptas. Voluptatem ducimus sint id earum ut
                                    nesciunt sed corrupti nemo.
                                </p>
                                <div className="read-more">
                                    <Link to="/blog-details">Read More</Link>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* End post list item */}
                        </div>
                        {/* End blog posts list */}
                        </div>
                    </section>
                    {/* /Blog Posts Section */}
                    {/* Blog Pagination Section */}
                    <section id="blog-pagination" className="blog-pagination section">
                        <div className="container">
                        <div className="d-flex justify-content-center">
                            <ul>
                            <li>
                                <a href="#">
                                <i className="bi bi-chevron-left" />
                                </a>
                            </li>
                            <li>
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#" className="active">
                                2
                                </a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>...</li>
                            <li>
                                <a href="#">10</a>
                            </li>
                            <li>
                                <a href="#">
                                <i className="bi bi-chevron-right" />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </section>
                    {/* /Blog Pagination Section */}
                    </div>
                    <div className="col-lg-4 sidebar">
                    <div className="widgets-container">
                        {/* Search Widget */}
                        <div className="search-widget widget-item">
                        <h3 className="widget-title">Search</h3>
                        <form action="">
                            <input type="text" />
                            <button type="submit" title="Search">
                            <i className="bi bi-search" />
                            </button>
                        </form>
                        </div>
                        {/*/Search Widget */}
                        {/* Categories Widget */}
                        <div className="categories-widget widget-item">
                        <h3 className="widget-title">Categories</h3>
                        <ul className="mt-3">
                            <li>
                            <a href="#">
                                General <span>(25)</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                Lifestyle <span>(12)</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                Travel <span>(5)</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                Design <span>(22)</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                Creative <span>(8)</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                Educaion <span>(14)</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                        {/*/Categories Widget */}
                        {/* Recent Posts Widget */}
                        <div className="recent-posts-widget widget-item">
                        <h3 className="widget-title">Recent Posts</h3>
                        <div className="post-item">
                            <img
                            src={BlogRecent1}
                            alt=""
                            className="flex-shrink-0"
                            />
                            <div>
                            <h4>
                                <Link to="/blog-details">
                                Nihil blanditiis at in nihil autem
                                </Link>
                            </h4>
                            <time dateTime="2020-01-01">Jan 1, 2020</time>
                            </div>
                        </div>
                        {/* End recent post item*/}
                        <div className="post-item">
                            <img
                            src={BlogRecent2}
                            alt=""
                            className="flex-shrink-0"
                            />
                            <div>
                            <h4>
                                <Link to="/blog-details">Quidem autem et impedit</Link>
                            </h4>
                            <time dateTime="2020-01-01">Jan 1, 2020</time>
                            </div>
                        </div>
                        {/* End recent post item*/}
                        <div className="post-item">
                            <img
                            src={BlogRecent3}
                            alt=""
                            className="flex-shrink-0"
                            />
                            <div>
                            <h4>
                                <Link to="/blog-details">
                                Id quia et et ut maxime similique occaecati ut
                                </Link>
                            </h4>
                            <time dateTime="2020-01-01">Jan 1, 2020</time>
                            </div>
                        </div>
                        {/* End recent post item*/}
                        <div className="post-item">
                            <img
                            src={BlogRecent4}
                            alt=""
                            className="flex-shrink-0"
                            />
                            <div>
                            <h4>
                                <Link to="/blog-details">
                                Laborum corporis quo dara net para
                                </Link>
                            </h4>
                            <time dateTime="2020-01-01">Jan 1, 2020</time>
                            </div>
                        </div>
                        {/* End recent post item*/}
                        <div className="post-item">
                            <img
                            src={BlogRecent5}
                            alt=""
                            className="flex-shrink-0"
                            />
                            <div>
                            <h4>
                                <Link to="/blog-details">
                                Et dolores corrupti quae illo quod dolor
                                </Link>
                            </h4>
                            <time dateTime="2020-01-01">Jan 1, 2020</time>
                            </div>
                        </div>
                        {/* End recent post item*/}
                        </div>
                        {/*/Recent Posts Widget */}
                        {/* Tags Widget */}
                        <div className="tags-widget widget-item">
                        <h3 className="widget-title">Tags</h3>
                        <ul>
                            <li>
                            <a href="#">App</a>
                            </li>
                            <li>
                            <a href="#">IT</a>
                            </li>
                            <li>
                            <a href="#">Business</a>
                            </li>
                            <li>
                            <a href="#">Mac</a>
                            </li>
                            <li>
                            <a href="#">Design</a>
                            </li>
                            <li>
                            <a href="#">Office</a>
                            </li>
                            <li>
                            <a href="#">Creative</a>
                            </li>
                            <li>
                            <a href="#">Studio</a>
                            </li>
                            <li>
                            <a href="#">Smart</a>
                            </li>
                            <li>
                            <a href="#">Tips</a>
                            </li>
                            <li>
                            <a href="#">Marketing</a>
                            </li>
                        </ul>
                        </div>
                        {/*/Tags Widget */}
                    </div>
                    </div>
                </div>
                </div>
            </main>
            <footer id="footer" className="footer">
                <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>
                        Subscribe to our newsletter and receive the latest news about our
                        products and services!
                        </p>
                        <form
                        action="forms/newsletter.php"
                        method="post"
                        className="php-email-form"
                        >
                        <div className="newsletter-form">
                            <input type="email" name="email" />
                            <input type="submit" defaultValue="Subscribe" />
                        </div>
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                            Your subscription request has been sent. Thank you!
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                    <Link to="/" className="d-flex align-items-center">
                        <span className="sitename">Scholarship Management System</span>
                    </Link>
                    <div className="footer-contact pt-3">
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                        <p className="mt-3">
                        <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                        </p>
                        <p>
                        <strong>Email:</strong> <span>info@example.com</span>
                        </p>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>
                        <i className="bi bi-chevron-right" /> <a href="#">Home</a>
                        </li>
                        <li>
                        <i className="bi bi-chevron-right" /> <a href="#">About us</a>
                        </li>
                        <li>
                        <i className="bi bi-chevron-right" /> <a href="#">Services</a>
                        </li>
                        <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <a href="#">Terms of service</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li>
                        <i className="bi bi-chevron-right" /> <a href="#">Web Design</a>
                        </li>
                        <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <a href="#">Web Development</a>
                        </li>
                        <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <a href="#">Product Management</a>
                        </li>
                        <li>
                        <i className="bi bi-chevron-right" /> <a href="#">Marketing</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-4 col-md-12">
                    <h4>Follow Us</h4>
                    <p>
                        Cras fermentum odio eu feugiat lide par naso tierra videa magna
                        derita valies
                    </p>
                    <div className="social-links d-flex">
                        <a href="">
                        <i className="bi bi-twitter-x" />
                        </a>
                        <a href="">
                        <i className="bi bi-facebook" />
                        </a>
                        <a href="">
                        <i className="bi bi-instagram" />
                        </a>
                        <a href="">
                        <i className="bi bi-linkedin" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container copyright text-center mt-4">
                <p>
                    © <span>Copyright</span>{" "}
                    <strong className="px-1 sitename">FlexStart</strong>{" "}
                    <span>All Rights Reserved</span>
                </p>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you've purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
                    Distributed by <a href="“https://themewagon.com">ThemeWagon</a>
                </div>
                <a href="“https://themewagon.com"></a>
                </div>
                <a href="“https://themewagon.com"></a>
            </footer>
            <a href="“https://themewagon.com">{/* Scroll Top */}</a>
            <a
                href="#"
                id="scroll-top"
                className="scroll-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
            {/* Vendor JS Files */}
            {/* Main JS File */}
        </>
    )
}

export default Blog;