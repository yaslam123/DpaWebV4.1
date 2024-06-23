import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const beAware = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Data Protection Athourity</title>
            </Head>
            <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <section className="bg-white py-[4rem] md:py-[4rem] lg:py-[4rem]">
                    <div className="container">
                        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                            <h4>Be Aware</h4>
                            <p className="pt-12 text-lg font-semibold">
                                It is more crucial than ever to understand who is using and why your personal data in this data-driven society. You have a right
                                to know how organisations use your data, even if it's done in the background. This includes being aware of how users use your
                                information to target you with marketing on social media.
                            </p>
                        </div>

                        <ul>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    01
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Clear and straightforward</h4>
                                    <p className="text-lg font-semibold">
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                                        document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy
                                        is available.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    02
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Visually appealing</h4>
                                    <p className="text-lg font-semibold">
                                        We pay a lot of attention to the visual solution so that it is also attractive and in line with modern market
                                        requirements in addition to being comfortable to use.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    03
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">User-friendly</h4>
                                    <p className="text-lg font-semibold">
                                        Our design solutions are aesthetically pleasing, user-friendly, and practical so that users will feel attention and a
                                        gentle attitude in every pixel.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 pt-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    04
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Enhanced Productivity</h4>
                                    <p className="text-lg font-semibold">
                                        We significantly reduce the task completion time, allowing users to do their jobs in fewer clicks, thus contributing to
                                        better overall productivity.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </div>
    );
};
export default beAware;
