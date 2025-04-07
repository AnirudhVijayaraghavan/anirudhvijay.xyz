// techIcons.js
import { DiLinux, DiJavascript1, DiPhp, DiPython, DiPostgresql, DiMysql, DiDocker, DiRedis } from 'react-icons/di';
import { SiAmazonwebservices, SiPacker, SiGnubash, SiGithub, SiLaravel, SiPulumi, SiNodedotjs, SiJquery, SiReact, SiTailwindcss, SiPostman, SiFigma, SiDigitalocean, SiGooglecloud, SiTerraform } from 'react-icons/si';
import { PiPianoKeys } from "react-icons/pi";

const techIconMap = {
    "Javascript": <DiJavascript1 />,
    "PHP": <DiPhp />,
    "Python": <DiPython />,
    "PostgreSQL": <DiPostgresql />,
    "MySQL": <DiMysql />,
    "Laravel": <SiLaravel />,
    "Node.js": <SiNodedotjs />,
    "jQuery": <SiJquery />,
    "React Vite": <SiReact />,
    "Tailwind CSS": <SiTailwindcss />,
    "Postman": <SiPostman />,
    "Figma": <SiFigma />,
    "AWS": <SiAmazonwebservices />,
    "DigitalOcean": <SiDigitalocean />,
    "GCP": <SiGooglecloud />,
    "Terraform": <SiTerraform />,
    "Docker": <DiDocker />,
    "Redis": <DiRedis />,
    "Pulumi": <SiPulumi />,
    "Github": <SiGithub />,
    "Linux": <DiLinux />,
    "Bash": <SiGnubash />,
    "Packer": <SiPacker />,
};

export default techIconMap;
