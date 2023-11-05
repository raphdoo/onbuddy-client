import Image from 'components/common/Images/Image'
import { profil } from '../../../assets/Assets'
import { user1 } from '../../../assets/Assets'
import { vector } from '../../../assets/Assets'
import { vectordot } from '../../../assets/Assets'




function ProfilePage() {
  return (
    <div className="h-screen bg-gray-200 sm:Relative">	
			<section className="">
				<div className="bg-[#0F6FC8] p-20 sm:p-32 w-full">
					<div className="text-white flex justify-start items-center text-center sm:gap-2 font-bold px-5">
						<Image src={user1} alt="User profile" className="h-5 w-5" />
						<h2 className="">My Profile</h2>
					</div>
				</div>
				<div className="sm:absolute top-56 sm:max-w-7xl sm:mx-auto  bg-white rounded-2xl sm:w-full sm:ml-36 sm:py-10">
					<section className="sm:flex justify-between px-20 border-b-2 border-b-gray-400 py-3">
						<a href="/profile" className="border-b-2 border-blue-500 active">
							<div className="">
								<div className="flex justify-start items-center gap-2">
									<Image src={user1} alt="User profile" className="h-5 w-5" />
									<h2 className="">Profile</h2>
								</div>
							</div>
						</a>

						<a href="/edit" className="">
							<div className="">
								<div className="flex justify-start items-center gap-2">
									<Image src={user1} alt="User profile" className="h-5 w-5" />
									<h2 className="">Edit profile</h2>
								</div>
							</div>
						</a>

						<a href="/workdetails" className="">
							<div className="">
								<div className="flex justify-start items-center gap-2">
									<Image src={vector} alt="User profile" className="h-5 w-5" />
									<h2 className="">Work details</h2>
								</div>
							</div>
						</a>

						<a href="/changepassword" className="">
							<div className="">
								<div className="flex justify-start items-center gap-2">
									<Image src={vectordot} alt="User profile" className="h-5 w-5" />
									<h2 className="">Change password</h2>
								</div>
							</div>
						</a>

						<a href="/adminedit" className="">
							<div className="">
								<div className="flex justify-start items-center gap-2">
									<Image src={vectordot} alt="User profile" className="h-5 w-5" />
									<h2 className="">Admin</h2>
								</div>
							</div>
						</a>
					</section>
					<section className="sm:grid grid-cols-12 mt-4 px-5 gap-10">
						<div className="col-span-4 mt-5 bg-white shadow-xl flex flex-col items-center rounded-2xl p-6">
							<div className="">
								<Image src={profil} alt="Logo Image" className="w-40 h-40 rounded-full md:w-auto" />
							</div>
							<div className="flex flex-col items-center">
								<h2 className="">ON BUDDY</h2>
								<h2 className="">onbuddy@gmail.com</h2>
								<h2 className="">Lagos, Nigeria</h2>
							</div>
						</div>
						<div className="col-span-8 bg-white shadow-xl rounded-sm">
							<div className="flex justify-between py-4 px-4 bg-[#D6EBFF99]">
								<h2 className="">First Name</h2>
								<h2 className="">Onbuddy</h2>
							</div>

							<div className="flex justify-between py-4 px-4">
								<h2 className="">Last Name</h2>
								<h2 className="">Onbuddy</h2>
							</div>

							<div className="flex justify-between py-4 px-4 bg-[#D6EBFF99]">
								<h2 className="">Email</h2>
								<h2 className="">onbuddy@gmail.com</h2>
							</div>

							<div className="flex justify-between py-4 px-4">
								<h2 className="">Age</h2>
								<h2 className="">25</h2>
							</div>

							<a href="/edit" className="">
								<div className="flex justify-between py-4 px-4 bg-[#D6EBFF99]">
									<h2 className="">Bio</h2>
									<h2 className="">Add</h2>
								</div>
							</a>
						</div>
					</section>
				</div>
			</section>
    </div>
		
  )
}

export default ProfilePage