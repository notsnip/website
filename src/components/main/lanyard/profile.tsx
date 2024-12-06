"use client";

import { Skeleton } from "~/components/ui/skeleton";
import { useLanyard } from "react-use-lanyard";
import Image from "next/image";

const statusMap = {
    online: "Online",
    dnd: "Do Not Disturb",
    idle: "Idle",
    offline: "Offline",
};

const statusColorMap = {
    online: "bg-green-500",
    dnd: "bg-red-500",
    idle: "bg-yellow-500",
    offline: "bg-neutral-400",
};

export function LanyardProfile() {
    const { loading, status } = useLanyard({
        userId: "1019641343875760350",
        socket: true,
    });

    if (loading || !status) {
        return <Skeleton className="h-[69px] w-[300px] rounded-md" />;
    }

    const activity = status.activities.find((activity) => activity.type !== 4);

    return (
        // <BlurFade delay={0.25} inView>
        <div className="flex flex-row space-x-2 items-center mb-1">
            <div className="relative mr-2">
                <Image
                    src={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}`}
                    alt="discord avatar"
                    width={64}
                    height={64}
                    className="rounded-lg"
                />
                <div className="absolute bottom-0 right-0 transform translate-x-1 translate-y-1">
                    <span className="relative flex h-4 w-4">
                        <span
                            className={`animate-ping transition-all absolute inline-flex h-full w-full rounded-full ${
                                statusColorMap[status.discord_status]
                            }`}
                        ></span>
                        <span
                            className={`relative inline-flex rounded-full h-4 w-4 ${
                                statusColorMap[status.discord_status]
                            }`}
                        ></span>
                    </span>
                </div>
            </div>
            <div className="flex flex-col space-y-1">
                <p className="text-neutral-100">
                 snip
                </p>

                <div className="flex flex-row space-x-1 items-center">
                    {activity ? (
                        <p className="text-neutral-400 text-sm">
                            {activity.type === 2 ? (
                                <span>
                                    Listening to
                                    {status.spotify?.song.length! +
                                        status.spotify?.artist.length! <
                                    30 ? (
                                        <span>
                                            {" "}
                                            {status.spotify?.song} by{" "}
                                            {status.spotify?.artist}
                                        </span>
                                    ) : (
                                        <span> Spotify</span>
                                    )}
                                </span>
                            ) : (
                                <span>Playing {activity.name}</span>
                            )}
                        </p>
                    ) : (
                        <p className="text-neutral-400 text-sm">
                            {statusMap[status.discord_status]} on Discord
                        </p>
                    )}
                </div>
            </div>
        </div>
        /* </BlurFade> */
    );
}
