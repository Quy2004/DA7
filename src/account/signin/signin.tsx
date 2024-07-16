import { Link } from "react-router-dom"

function Signin() {
    return (
        <>
            <section className="bg-hero bg-no-repeat bg-cover">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-left">Đăng nhập</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" placeholder="Email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" />
                            </div>
                            <div className="text-right">
                                    <a href="#" className="font-semibold text-red-500 hover:text-indigo-500">Quên mật khẩu?</a>
                                </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Đăng nhập</button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Bạn chưa có tài khoản?
                        <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to={"/register"}>Đăng kí</Link>
                    </p>
                </div>
            </section>
        </>
    )
}
export default Signin