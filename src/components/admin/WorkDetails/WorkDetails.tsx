import Image from 'components/common/Images/Image'
import { user1 } from '../../../assets/Assets'
import { vector } from '../../../assets/Assets'
import { vectordot } from '../../../assets/Assets'

function WorkDetails() {
  return (
    <div className="h-screen bg-gray-200">	
			<section className="">
			<div className="bg-[#0F6FC8] p-20 sm:p-32 w-full">
					<div className="text-white flex justify-start items-center text-center sm:gap-2 font-bold px-5">
						<Image src={user1} alt="User profile" className="h-5 w-5" />
						<h2 className="">Work Details</h2>
					</div>
				</div>
				<div className="sm:absolute top-[30%] left-[10%] mx-auto  bg-white rounded-2xl sm:w-[80%]  sm:py-10">
					<section className="sm:flex justify-between px-20 border-b-2 border-b-gray-400 py-3">
						<div className="">
							<a href="/profile" className="">
								<div className="flex justify-start items-center gap-2">
									<Image src={user1} alt="User profile" className="h-5 w-5" />
									<h2 className="">Profile</h2>
								</div>
							</a>
						</div>

						<div className="">
							<a href="/edit" className="">
								<div className="flex justify-start items-center gap-2">
									<Image src={user1} alt="User profile" className="h-5 w-5 text-blue-500" />
									<h2 className="">Edit profile</h2>
								</div>
							</a>
						</div>
						
						<a href="/workdetails" className="border-b-2 border-blue-500 active">
							<div className="flex justify-start items-center gap-2">
								<Image src={vector} alt="User profile" className="h-5 w-5" />
								<h2 className="">Work details</h2>
							</div>
						</a>

						<a href="/changepassword" className="">
							<div className="flex justify-start items-center gap-2">
								<Image src={vectordot} alt="User profile" className="h-5 w-5" />
								<h2 className="">Change password</h2>
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
								<Image src={vector} alt="Logo Image" className="w-40 h-40  md:w-auto" />
							</div>
						</div>

						<div className="col-span-8 bg-white shadow-xl rounded-sm">
							<div className="flex justify-between py-4 px-4 bg-[#D6EBFF99]">
								<h2 className="">Work type</h2>
								<h2 className="">Internship</h2>
							</div>

							<div className="flex justify-between py-4 px-4">
								<h2 className="">Role</h2>
								<h2 className="">Frontend engineer</h2>
							</div>

							<div className="flex justify-between py-4 px-4 bg-[#D6EBFF99]">
							<h2 className="">Start date</h2>
								<h2 className="">23/10/23</h2>
							</div>

							<div className="flex justify-between py-4 px-4">
							<h2 className="">Payment</h2>
								<h2 className="">#100,000</h2>
							</div>
							
						</div>
					</section>
				</div>
			</section>
    </div>
  )
}

export default WorkDetails
