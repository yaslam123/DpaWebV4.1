import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const DPO = () => {
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
                            <h4>Data Protection Officers</h4>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Understanding data protection officer DPO</h2>
                            <p className="pt-12 text-lg font-semibold">
                                A Data Protection Officer (DPO) is an individual designated by an organization to oversee and ensure compliance with data
                                protection laws and regulations. The role of the DPO is particularly crucial in organizations that process large amounts of
                                personal data or engage in sensitive data processing activities.
                            </p>
                            <p className="pt-12 text-lg font-semibold">
                                Data Protection Officer (DPO) plays a crucial role in ensuring that organizations comply with data protection laws and best
                                practices. In Somalia, the DPO acts as a guardian of personal data, overseeing data protection strategies and implementation to
                                safeguard individuals' privacy rights.
                            </p>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Key Responsibilities</h2>
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Monitoring Compliance</h4>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        Regulatory Adherence: Ensure that the organization complies with national and international data protection regulations.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        Policy Implementation: Develop, implement, and manage data protection policies and procedures within the organization.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
                                        Advising on Data Protection Impact Assessments (DPIAs)
                                    </h4>
                                    <p className="pb-3 text-[18px] font-semibold dark:text-white">
                                        Risk Management: Provide guidance on conducting DPIAs to identify and mitigate data processing risks.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        Documentation: Ensure DPIAs are documented and updated regularly.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
                                        Data Protection Training and Awareness
                                    </h4>
                                    <p className="pb-3 text-[18px] font-semibold dark:text-white">
                                        Staff Training: Organize regular training sessions for employees on data protection principles and practices.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        Awareness Programs: Promote a culture of data protection awareness within the organization.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    04
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Serving as a Point of Contact</h4>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        For Data Subjects: Act as the primary contact for individuals (data subjects) regarding their data protection rights,
                                        such as access, rectification, and erasure requests.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        For Authorities: Liaise with Somalia's Data Protection Authority on compliance matters, data breaches, and other
                                        regulatory issues.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    05
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Managing Data Breaches</h4>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        Incident Response: Develop and oversee procedures for detecting, reporting, and investigating data breaches.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold dark:text-white">
                                        Notification: Ensure timely notification of data breaches to the relevant authorities and affected individuals when
                                        required.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    06
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Ensuring Data Security</h4>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        Protective Measures: Collaborate with IT and security teams to implement robust data security measures.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        Compliance Audits: Conduct regular audits to ensure data protection measures are effective and up-to-date.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    07
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
                                        Advising on Data Processing Activities
                                    </h4>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        Legal Advice: Provide expert advice on legal requirements and best practices for data processing activities.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold  dark:text-white">
                                        Risk Assessment: Evaluate and advise on the risks associated with data processing activities and suggest mitigations.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    08
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Maintaining Records</h4>
                                    <p className="pb-3 text-[18px] font-semibold dark:text-white">
                                        Documentation: Keep comprehensive records of data processing activities, DPIAs, data breach incidents, and compliance
                                        audits.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Role of the DPO</h2>
                            <p className="pt-12 text-lg font-semibold">
                                In Somalia, the role of the DPO is vital in establishing and maintaining public trust in how personal data is handled. By
                                ensuring compliance with data protection laws, DPOs help protect individuals' privacy rights and foster a culture of
                                transparency and accountability.
                            </p>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Qualifications of a DPO</h2>
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Expert Knowledge: A deep understanding of data protection laws, regulations, and practices.
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Legal Acumen: Familiarity with legal requirements related to data protection and privacy.
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Communication Skills: Ability to communicate effectively with data subjects, regulatory authorities, and internal
                                        stakeholders.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    04
                                </div>
                                <div className="lg:w-4/6">
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Analytical Skills: Strong analytical skills to assess data protection risks and compliance issues.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <p className="pt-12 text-lg font-semibold">
                                Data Protection Officers in Somalia play a crucial role in safeguarding personal data and ensuring that organizations operate
                                within the legal frameworks designed to protect individual privacy.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};
export default DPO;
