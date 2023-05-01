import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography className="font-normal text-[#b3e5fc]">
        &copy; 2023 WHTECH
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            className="text-[#b3e5fc] font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Me
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="text-[#b3e5fc] font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className=" text-[#b3e5fc] font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="text-[#b3e5fc] font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  )
}

export default Footer