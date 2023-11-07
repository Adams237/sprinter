import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoFaceboo from '../../assets/images/Facebook-logo-500x313-2.png'
import iconPhone from '../../assets/images/pngtree-phone-icon-png-image_1757859.jpg'
import userIcon from '../../assets/images/user.jpg'

const Register = () => {

    const [user, setUser] = useState({})
    const handleChange = (e) => {
        const targetName = e.target.name
        const targetValue = e.target.value
        setUser({
            ...user, [targetName]: targetValue
        })
    }

    return (
        // <!-- Section SING IN -->
        <section>
            {/*content*/}
            <div className="py-16 md:py-24 lg:py-32">
                {/*<!-- Component -->*/}
                <div className="mx-auto max-w-xl bg-[#f2f2f7] px-5 py-12 text-center md:px-10">
                    {/*<!-- Title -->*/}
                    <h2 className="text-3xl font-bold md:text-5xl">Créer un Compte</h2>
                    {/*<!-- Button -->*/}
                    <button className="mx-auto w-full mt-5 flex max-w-sm justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19d23637f876_GoogleLogo.svg" alt="" className="mr-4" />
                        <p className="font-bold">Se connecter avec Google</p>
                    </button>
                    <button className="mx-auto w-full flex max-w-sm mt-5 justify-center items-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                        <img src={logoFaceboo} alt="" width={50} height={50} className="mr-4" />
                        <p className="font-bold">Se connecter avec Facebook</p>
                    </button>
                    {/*<!-- Devider -->*/}
                    <div className="mx-auto mb-14 mt-14 flex max-w-sm justify-around">
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg" alt="" className="inline-block" />
                        <p className="text-sm text-[#647084]">ou se connecter avec email</p>
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg" alt="" className="inline-block" />
                    </div>
                    {/*form*/}
                    <form className="mx-auto mb-4 max-w-sm pb-4" name="wf-form-password" method="get">
                        <div className="relative">
                            <img alt="" src={userIcon} width={24} height={24} className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
                            <input onChange={(e) => { handleChange(e) }} type="text" className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]" name="name" placeholder="entrer votre nom" required="" />
                        </div>
                        <div className="relative">
                            <img alt="" src={userIcon} width={24} height={24} className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
                            <input onChange={(e) => { handleChange(e) }} type="text" className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]" name="lastName" placeholder="entrer votre prénom" required/>
                        </div>
                        <div className="relative">
                            <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
                            <input onChange={(e) => { handleChange(e) }} type="email" className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]" name="email" placeholder="adresse mail" required />
                        </div>
                        <div className="relative">
                            <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
                            <input name="password" onChange={(e) => { handleChange(e) }} type="password" className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="mot de passe" required />
                        </div>
                        <div className="relative">
                            <img alt="" src={iconPhone} width={24} height={24} className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
                            <input onChange={(e) => { handleChange(e) }} type="number" name="phone" className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="entrer votre numéro de téléphone (min 8 characters)" required />
                        </div>
                        <div className="relative mb-4 pb-2">
                            <input onChange={(e) => { handleChange(e) }} type="text" name="cni" className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="entrer votre numéro de votre cni" required />
                        </div>
                        <button className="flex max-w-full w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                            <p className="mr-6 font-bold">Créer son compte</p>
                            <div className="h-4 w-4 flex-none">
                                <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                                    <title>Arrow Right</title>
                                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                                </svg>
                            </div>
                        </button>
                    </form>
                    <p className="text-sm text-[#636262]">Avez vous déjà un compte? <Link to='/login' className="font-[Montserrat,_sans-serif] text-sm font-bold text-black">Se Connecter</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}


export default Register