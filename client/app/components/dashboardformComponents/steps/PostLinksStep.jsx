import React from 'react';
import { AddLinkSection } from '../AddLinkSection';
import { FormButton } from '../ModalFormMobile';
import { cardForm } from '../../../utils/constant';

const postLinksStructure = cardForm[7];

const PostLinksStep = ({
    instagramPost,
    setInstagramPost,
    instagramReels,
    setInstagramReels,
    youtubeVideo,
    setYoutubeVideo,
}) => {
    // Function to render AddLinkSection based on the section index
    const renderAddLinkSection = (section, index) => {
        let items;
        let setItems;

        // Determine the appropriate data and setter function for each section
        switch (index) {
            case 0: // Instagram Posts
                items = instagramPost;
                setItems = setInstagramPost;
                break;
            case 1: // Instagram Reels
                items = instagramReels;
                setItems = setInstagramReels;
                break;
            case 2: // YouTube Videos
                items = youtubeVideo;
                setItems = setYoutubeVideo;
                break;
            default:
                items = [];
                setItems = () => {};
        }

        return (
            <AddLinkSection
                key={section.title} // Use the section title as a unique key
                title={section.title}
                items={items}
                setItems={setItems}
                placeholder={section.placeholder}
            />
        );
    };

    return (
        <div className="space-y-6">
            {postLinksStructure.sections.map((section, index) => {
                switch (section.type) {
                    case 'addLinkSection':
                        return renderAddLinkSection(section, index);
                    default:
                        return null; // Render nothing for unsupported types
                }
            })}
        </div>
    );
};

export default PostLinksStep;
