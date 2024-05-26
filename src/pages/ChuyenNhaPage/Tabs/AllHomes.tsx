import { Link } from "react-router-dom";
import '../ChuyenNha.css'
const AllHomes: React.FC = () => {
    return (
        <>
            <div className="allHome row grid  grid-cols-3 containerAll mx-auto gap-8 my-20 ">
                <div className="cow *:rounded-[10px] *:text-justify">
                    <ul>
                        <li>
                            <Link to="#">
                                <img src="https://file.hstatic.net/1000075078/article/thecoffeehouse_traxanhtaybac_1_d8c2ac635c5941a19c0065339727e41a_master.jpg"
                                    alt="" className="object-cover w-[370px] h-[370px] rounded-xl" />
                            </Link>
                        </li>
                    </ul>

                    <Link to=''>
                        <h3 className="uppercase truncate text-[17px] font-semibold pt-3 pb-2">
                            NGƯỢC LÊN TÂY BẮC GÓI VỊ MỘC VỀ XUÔI
                        </h3>
                    </Link>
                    <span>
                        <p className="text-left  text-gray-400 mb-4 text-xs">
                            30/2/2024
                        </p>
                    </span>
                    <p className="text-sm ">
                        Những dải ruộng bậc thang, các cô gái Thái với điệu múa xòe hoa, muôn cung đường ngợp mùa hoa…đó là rẻo cao Tây Bắc luôn làm say lòng...
                    </p>
                </div>
                <div className="cow col-span-2 *:rounded-[10px] *:text-justify">
                    <ul>
                        <li>
                            <Link to="">
                                <img src="https://file.hstatic.net/1000075078/article/signaturebythecoffeehouse_03_16b2ab7101e14d62835a4b231e73b65d_master.jpg"
                                    alt="" className="h-[430px] w-full rounded-xl" />
                            </Link>
                        </li>
                    </ul>
                    <Link to=''>
                        <h3 className="uppercase truncate text-[17px] font-semibold pt-3 pb-2">
                            SIGNATURE BY THE COFFEE HOUSE - "DẤU ẤN" MỚI CỦA NHÀ CÀ PHÊ
                        </h3>
                    </Link>
                    <span>
                        <p className="text-left  text-gray-400 mb-4 text-xs">
                            30/2/2024
                        </p>
                    </span>
                    <p className="text-sm font-normal ">
                        Ngày 11.01.2023,
                        Chuỗi The Coffee House thông báo cửa hàng SIGNATURE
                        by The Coffee House chính thức khai trương tại trung tâm thương mại Crescent Mall, Nguyễn Văn Linh, Quận...
                    </p>
                </div>
            </div>
            <div className="row grid grid-cols-5 bg-amber-50 pos">
                <div className="cow border-2 col-span-2">
                    <div className="image-container" style={{ marginTop: '-40px' }}>
                        <ul>
                            <li>
                                <Link to="">
                                    <img src="https://file.hstatic.net/1000075078/file/photo_2021-11-25_09-31-52_52c6f13fcc06433db2362281059d1c09.jpg"
                                        className="mb-2 w-full" alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <h1>Left</h1>
                </div>
                <div className="cow border-2 ml-4 col-span-3">
                    <div>
                        <h2 className="border-l-[6px] text-left text-xl font-semibold px-3 py-0.5 mt-10 mb-4 border-l-orange-400">
                            Coffeholic
                        </h2>
                        <div className="grid grid-cols-3 *:rounded-[10px] py-3">
                            <div className="col-span-1">
                                <ul className="">
                                    <li className="">
                                        <Link to="#">
                                            <img src="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_master.jpg" alt=""
                                                className="rounded-xl h-[160px]" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-2 px-5 text-justify w-3/4">
                                <Link to=''>
                                    <h3 className="uppercase text-sm font-semibold pb-1">bắt gặp sài gòn xưa trong món uống hiện đại của giới trẻ</h3>
                                </Link>
                                <span className="text-left">
                                    <p className="my-2 text-gray-500">
                                        5/25/2024
                                    </p>
                                </span>
                                <p className="text-[15px]">
                                    Dẫu qua bao nhiêu lớp sóng thời gian,
                                    người ta vẫn có thể tìm lại...</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="grid grid-cols-3 *:rounded-[10px] py-3">
                            <div className="col-span-1">
                                <ul className="">
                                    <li className="">
                                        <Link to="#">
                                            <img src="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_master.jpg" alt=""
                                                className="rounded-xl h-[160px]" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-2 px-5 text-left w-3/4">
                                <Link to=''>
                                    <h3 className="uppercase tran text-xl font-semibold pb-1">bắt gặp sài gòn xưa trong món uống hiện đại của giới trẻ</h3>
                                </Link>
                                <span className="text-left">
                                    <p className="my-2 text-gray-500">
                                        5/25/2024
                                    </p>
                                </span>
                                <p className="text-[15px]">
                                    Dẫu qua bao nhiêu lớp sóng thời gian,
                                    người ta vẫn có thể tìm lại...</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="grid grid-cols-3 *:rounded-[10px] py-3">
                            <div className="col-span-1">
                                <ul className="">
                                    <li className="">
                                        <Link to="#">
                                            <img src="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_master.jpg" alt=""
                                                className="rounded-xl h-[160px]" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-2 px-5 text-justify w-3/4">
                                <Link to=''>
                                    <h3 className="uppercase text-sm font-semibold pb-1">bắt gặp sài gòn xưa trong món uống hiện đại của giới trẻ</h3>
                                </Link>
                                <span className="text-left">
                                    <p className="my-2 text-gray-500">
                                        5/25/2024
                                    </p>
                                </span>
                                <p className="text-[15px]">
                                    Dẫu qua bao nhiêu lớp sóng thời gian,
                                    người ta vẫn có thể tìm lại...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AllHomes