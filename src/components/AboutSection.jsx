import { DiGitCompare } from "react-icons/di";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";

export default function AboutSection() {
    return (
       <section id="about" className=" pt-20 pb-32 bg-slate-200">
            <div className="container">
                <h4 className="font-bold text-primary text-center text-3xl mb-10">Pekerjaan Saya</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                    <div className="relative flex flex-col rounded bg-secondary hover:opacity-95 p-6 outline outline-slate-200 transition w-full lg:w-1/4 px-4 mb-5 mx-4 lg:mx-0">
                        <div className="flex">
                            <DiGitCompare className="font-bold text-3xl mb-5 mr-2 text-red-600" />
                            <h2 className="font-bold text-white text-3xl mb-5">Sharing</h2>
                        </div>
                        <p className=" text-slate-400">Berdiskusi dan memberikan pelatihan masyarakat untuk kebermanfaatan teknologi dalam bentuk video atau tulisan.</p>
                    </div>

                    <div className="relative flex flex-col rounded bg-secondary hover:opacity-95 p-6 outline outline-slate-200 transition w-full lg:w-1/4 px-4 mb-5 mx-4 lg:mx-0">
                        <div className="flex">
                            <FaHeadSideVirus className="font-bold text-3xl mb-5 mr-2 text-red-600" />
                            <h2 className="font-bold text-white text-3xl mb-5">Insinyur</h2>
                        </div>
                        <p className=" text-slate-400">Memecahkan masalah dan mengembangkan aplikasi untuk sistem informasi</p>
                    </div>

                    <div className="relative flex flex-col rounded bg-secondary hover:opacity-95 p-6 outline outline-slate-200 transition w-full lg:w-1/4 px-4 mb-5 mx-4 lg:mx-0">
                        <div className="flex">
                            <FaUsersGear className="font-bold text-3xl mb-5 mr-2 text-red-600" />
                            <h2 className="font-bold text-white text-3xl mb-5">Perancang</h2>
                        </div>
                        <p className=" text-slate-400">Merancang antarmuka dan pengalaman untuk user dalam menggunakan applikasi</p>
                    </div>
                </div>
            </div>
       </section>
    )
}