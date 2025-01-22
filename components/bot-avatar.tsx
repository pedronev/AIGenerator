import { Avatar } from "@radix-ui/react-avatar";
import {  AvatarImage } from "./ui/avatar";

export const BotAvatar = () => {
    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src="/logo.png" />
        </Avatar>
    );
}