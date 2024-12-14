"use client";

import {
    CommandDialog,
    CommandEmpty,
    CommandItem,
    CommandList,
    CommandGroup,
    CommandInput,
    CommandSeparator,
} from "../ui/command";
import { useRouter } from "next/navigation";
import { Command as CommandIcon } from "lucide-react";
import { EMAIL, GIT_URL } from "~/data/config";

import {
    ArrowUpDown,
    CornerDownLeft,
    Layers3,
    Home,
    X as CloseIcon,
    Github,
    Mail,
    Globe,
    Linkedin
} from "lucide-react";

import { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/button";

export function CommandMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && e.ctrlKey) {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // e.g, pass in router push to func so it closes setIsOpen
    const runCommand = useCallback((command: () => unknown) => {
        setIsOpen(false);
        command();
    }, []);

    // TODO: slug
    // const currentPath = usePathname();
    // console.log(currentPath);

    return (
        <>
            <Button
                variant={"outline"}
                className="px-3 rounded-full absolute top-0 right-0 mt-4 mr-4 z-50" // maybe i can make this sticky? idk css is scary
                onClick={() => setIsOpen(!isOpen)}
            >
                {" "}
                <CommandIcon size={14} />{" "}
            </Button>
            <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
                <CommandInput placeholder="Search" />
                <CommandList>
                    <CommandEmpty>No results found</CommandEmpty>
                    <CommandGroup heading="Pages">
                        <CommandItem
                            className="transition-all duration-100"
                            onSelect={() => runCommand(() => router.push("/"))}
                        >
                            <Home size={16} />
                            <span className="ml-2">Home</span>
                        </CommandItem>
                        {/* <CommandItem
                            className="transition-all duration-100"
                            onSelect={() =>
                                runCommand(() => router.push("/#work"))
                            }
                        >
                            <Package size={16} />
                            <span className="ml-2">
                                Previous & Current Work
                            </span>
                        </CommandItem> */}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Actions">
                        <CommandItem
                            onSelect={() =>
                                runCommand(() => router.push(`${GIT_URL}`))
                            }
                        >
                            <Github size={16} />
                            <span className="ml-2">View Source Code</span>
                        </CommandItem>
                       
                        <CommandItem
                            onSelect={() =>
                                runCommand(() =>
                                    router.push(
                                        "https://linkedin.com/in/realshaurya"
                                    )
                                )
                            }
                        >
                            <Linkedin size={16} />
                            <span className="ml-2">LinkedIn</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() =>
                                runCommand(() => router.push(`mailto:${EMAIL}`))
                            }
                        >
                            <Mail size={16} />
                            <span className="ml-2">Send an Email</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
                <CommandSeparator />
                {/* TODO(dromzeh): alignments :3 */}
                <div className="text-neutral-400 flex gap-4 text-sm p-3 justify-end">
                    <div className="flex flex-row gap-1 items-center">
                        <ArrowUpDown
                            size={20}
                            color="white"
                            className="bg-neutral-800 p-1 rounded-sm border-neutral-700"
                        />
                        Navigate
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <CornerDownLeft
                            size={20}
                            color="white"
                            className="bg-neutral-800 p-1 rounded-sm border-neutral-700"
                        />
                        Select
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <CloseIcon
                            size={20}
                            color="white"
                            className="bg-neutral-800 p-1 rounded-sm border-neutral-700"
                        />
                        Close
                    </div>
                </div>
            </CommandDialog>
        </>
    );
}
