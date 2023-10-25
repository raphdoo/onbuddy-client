import Button from 'components/common/Button/Button'
import Image from 'components/common/Images/Image'
import { profil } from '../../../assets/Assets'




function ProfilePage() {
  return (
    <div>
		
			<section  className="h-full w-full text-white flex flex-col justify-center" style={{ background:"url('src/assets/images/img-bg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
				<div className="sm:grid grid-cols-12 flex flex-col gap-4 sm:gap-28 mt-20 pb-20 w-full">
					<section className="col-span-3 space-y-8 flex flex-col items-center">
						<h2 className="text-[#309CFF] text-[40px] font-[700px]">View Profile</h2>
						<Image src={profil} alt="Logo Image" className="w-40 h-40 rounded-full md:w-auto" />
						<Button 
						className="bg-blue-500 hover:bg-blue-600 text-white px-11 py-3 rounded-lg"
            label="Edit Profile"
						 />
					</section>

					<section className="col-span-9 space-y-6 px-4 sm:px-12">
						<div className="sm:py-10">
							<div className="bg-[#2068AA] text-white pt-5 pb-5 px-4 rounded-b-lg shadow-md">
								<h2 className="">Primary Details</h2>
							</div>
							<div className="divide divide-y-2 bg-white p-10 shadow-md">
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">First Name</h2>
									</section>
									<section className="hidden sm:block">
										<input type="text" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="Onbuddy" />
									</section>
								</div>
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">Last Name</h2>
									</section>
									<section className="hidden sm:block">
										<input type="text" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="Onbuddy" />
									</section>
								</div>
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">Age</h2>
									</section>
									<section className="hidden sm:block">
										<input type="number" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="25" />
									</section>
								</div>
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">Email</h2>
									</section>
									<section className="hidden sm:block">
										<input type="text" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="onbuddy@gmail.com" />
									</section>
								</div>
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">Gender</h2>
									</section>
									<section className="hidden sm:block">
										<input type="text" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="Male" />
									</section>
								</div>
							</div>
						</div>

						<div className="">
							<div className="bg-[#2068AA] text-white pt-5 pb-5 px-4 rounded-b-lg">
								<h2 className="">Work Details</h2>
							</div>
							<div className="divide divide-y-2 bg-white p-10">
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">Worker Type</h2>
									</section>
									<section className="hidden sm:block">
										<input type="text" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="Internship" />
									</section>
								</div>
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">Role</h2>
									</section>
									<section className="hidden sm:block">
										<input type="text" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="Frontend engineer" />
									</section>
								</div>
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">Start Date</h2>
									</section>
									<section className="hidden sm:block">
										<input type="text" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="24/10/23" />
									</section>
								</div>
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">Payment</h2>
									</section>
									<section className="hidden sm:block">
										<input type="text" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="#100,000" />
									</section>
								</div>
								<div className="text-black flex justify-between">
									<section className="">
										<h2 className="">Bio</h2>
									</section>
									<section className="hidden sm:block">
										<input type="text" className="outline-none border-none focus:outline-none focus:ring-0" placeholder="Add" />
									</section>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>	
    </div>
		
  )
}

export default ProfilePage