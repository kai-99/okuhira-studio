import React from "react";
import {
	FireIcon,
	// EmojiHappyIcon,
	// HomeIcon,
	// PhoneIcon,
	// StarIcon,
} from "@heroicons/react/solid";
import {
	// FireIcon,
	EmojiHappyIcon,
	HomeIcon,
	PhoneIcon,
	StarIcon,
	MenuAlt2Icon,
	XCircleIcon,
	CloudIcon,
} from "@heroicons/react/outline";

export const Fireicon = () => {
	return <FireIcon className="h-12 w-12 inline-block" />;
};

export const Emojiicon = () => {
	return <EmojiHappyIcon className="h-6 w-6 inline-block" />;
};

export const Homeicon = () => {
	return <HomeIcon className="h-6 w-6 inline-block" />;
};

export const Phoneicon = () => {
	return <PhoneIcon className="h-6 w-6 inline-block" />;
};

export const Staricon = () => {
	return <StarIcon className="h-6 w-6 inline-block" />;
};

export const Menuicon = () => {
	return <MenuAlt2Icon className="h-10 w-10 inline-block" />;
};

export const Crossicon = () => {
	return <XCircleIcon className="h-6 w-6 inline-block text-gray-100" />;
};

export const Cloudiocn = () => {
	return <CloudIcon className="h-8 w-8 inline-block" />;
};
