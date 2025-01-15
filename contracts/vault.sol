// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StoryVaultManager is ERC721URIStorage, Ownable {
    struct Story {
        string ipfsHash;
        address author;
        uint256 likes;
        uint256 reactions;
        bool isMinted;
    }

    uint256 public constant LIKE_THRESHOLD = 1000;
    uint256 private storyCount;
    mapping(uint256 => Story) public stories;
    mapping(uint256 => mapping(address => bool)) public hasLiked;

    event StorySubmitted(uint256 storyId, address author, string ipfsHash);
    event StoryLiked(uint256 storyId, address liker);
    event StoryMinted(uint256 storyId, address author, uint256 tokenId);

    constructor() ERC721("StoryVaultNFT", "SVNFT") {}

    function submitStory(string memory _ipfsHash) external {
        stories[storyCount] = Story({
            ipfsHash: _ipfsHash,
            author: msg.sender,
            likes: 0,
            reactions: 0,
            isMinted: false
        });
        emit StorySubmitted(storyCount, msg.sender, _ipfsHash);
        storyCount++;
    }

    function likeStory(uint256 _storyId) external {
        require(_storyId < storyCount, "Story does not exist");
        require(!hasLiked[_storyId][msg.sender], "Already liked");

        stories[_storyId].likes++;
        hasLiked[_storyId][msg.sender] = true;
        emit StoryLiked(_storyId, msg.sender);
    }

    function mintStoryNFT(uint256 _storyId, string memory _tokenURI) external {
        require(_storyId < storyCount, "Story does not exist");
        require(
            msg.sender == stories[_storyId].author,
            "Only the author can mint"
        );
        require(
            stories[_storyId].likes >= LIKE_THRESHOLD,
            "Not enough likes to mint"
        );
        require(!stories[_storyId].isMinted, "Already minted");

        uint256 tokenId = _storyId;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        stories[_storyId].isMinted = true;

        emit StoryMinted(_storyId, msg.sender, tokenId);
    }

    function getStory(uint256 _storyId) external view returns (Story memory) {
        require(_storyId < storyCount, "Story does not exist");
        return stories[_storyId];
    }
}
