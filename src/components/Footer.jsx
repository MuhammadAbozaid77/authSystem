import { FaFacebookSquare , FaInstagram , FaTwitter , FaWhatsapp} from "react-icons/fa";

import { Link } from "react-router-dom";


export default function Footer() {
  return <>
  
  <div className="p-6 sm:p-6 dark:bg-gray-900 dark:text-gray-100 bg-blue-900">

	<div className="flex justify-center space-x-4 align-center">
		<Link rel="noopener noreferrer" to="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
			<FaFacebookSquare size={20} color="white" />
		</Link>
		<Link rel="noopener noreferrer" to="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
			<FaInstagram size={20} color="white" />
		</Link>
		<Link rel="noopener noreferrer" to="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
			<FaTwitter size={20} color="white" />
		</Link>
		<Link rel="noopener noreferrer" to="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
			<FaWhatsapp size={20} color="white" />
		</Link>

	</div>
</div>
  </>
}
