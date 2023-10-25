import Button from 'components/common/Button/Button'
import Image from 'components/common/Images/Image'
import { profil } from '../../../assets/Assets'

function EditProfile() {
  return (
    <section  className="h-full w-full text-white flex flex-col justify-center" style={{ background:"url('src/assets/images/img-bg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
			<div className="sm:grid grid-cols-12 flex flex-col  gap-4 mt-20 pb-20 w-full">
				<section className="col-span-3 sm:space-y-8 flex flex-col items-center sm:ml-20">
					<h2 className="text-[#309CFF] text-[40px] font-[700px]">Edit Profile</h2>
					<Image src={profil} alt="Logo Image" className="w-40 h-40 rounded-full md:w-auto" />
				</section>

				<section className="col-span-9 px-4 sm:px-56">
					<div className="sm:py-10">
						<div className="bg-[#2068AA] text-white pt-5 pb-5 px-4 rounded-sm rounded-b-md shadow-md">
							<h2 className="">Bio</h2>
						</div>
						<textarea  rows={15} className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="">
						</textarea>

						<div className="py-5 sm:space-x-5 sm:block flex flex-col space-y-2">
							<Button 
								className="bg-[#309CFF] hover:bg-blue-600 text-white px-11 py-3 rounded-lg"
            		label="Save"
						 	/>

							<Button 
								className="hover:bg-blue-50 text-[#0A1F33] font-[700px] px-11 py-3 rounded-lg border border-[#0F6FC8]"
            		label="Cancel"
							 />
						</div>
					</div>
				</section>
			</div>
		</section>	
  )
}

export default EditProfile
