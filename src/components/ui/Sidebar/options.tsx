import ServersIcon from "../icons/Servers";
import BenchmarkIcon from "../icons/Benchmarks";
import ScriptIcon from "../icons/Script";
import MachinesIcon from "../icons/ Machines";
import ProvisioningIcon from "../icons/Provisioning";
import DataFlixIcon from "../icons/DataFlix";
import DBIcon from "../icons/DB";
import PinIcon from "../icons/PinIcon";
import PlusIcon from "../icons/PlusIcon";
import BookIcon from "../icons/BookIcon";

export const sidebarOptions = [
  {
    label: "My services",
    active: true,
    iconLeft: <DBIcon height={16} width={16} />,
  },
  {
    label: "Provisioning",
    iconLeft: <ProvisioningIcon height={16} width={16} />,
  },
  {
    label: "Availability Machines ",
    iconLeft: <MachinesIcon height={16} width={16} />,
  },
  {
    label: "Dataflix",
    iconLeft: <DataFlixIcon height={16} width={16} />,
  },
  {
    label: "Script Library",
    iconLeft: <ScriptIcon height={16} width={16} />,
  },
  {
    label: "Benchmarks",
    iconLeft: <BenchmarkIcon height={16} width={16} />,
  },
  {
    label: "Servers",
    iconLeft: <ServersIcon height={16} width={16} />,
  },
];

export const sidebarBottomOptions = [
  {
    label: "Invite people",
    iconRight: <PinIcon height={16} width={16} />,
    iconLeft: <PlusIcon height={16} width={16} />,
  },
  {
    label: "Help & Support",
    iconRight: <PinIcon height={16} width={16} />,
    iconLeft: <BookIcon height={16} width={16} />,
  },
];
