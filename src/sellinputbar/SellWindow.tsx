import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Textarea,
  HStack,
  VStack,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverBody,
  Tag,
  TagCloseButton,
  TagLabel
} from "@chakra-ui/react";
import {
  CloseIcon,
  AttachmentIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from "@chakra-ui/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CommonButton } from "../components/CommonButton";
import LocationModal from "./LocationModal";

interface ImageFile {
  id: string;
  file: File;
}

interface SellWindowProps {
  isOpen: boolean;
  handleClosePostWindow: () => void;
}

const categories = {
  furniture: ["Sofa", "Table", "Chair"],
  lookingForRoommate: ["Roommate", "Apartment"],
  electronics: ["Phone", "Laptop", "Camera"]
};

const SellWindow: React.FC<SellWindowProps> = ({
  isOpen,
  handleClosePostWindow
}) => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      if (images.length + files.length > 10) {
        setMessage("Maximum of 10 images allowed per post.");
        return;
      }

      setMessage(null); // Clear any previous messages
      const newImages = Array.from(files).map((file) => ({
        id: URL.createObjectURL(file), // Create a URL for preview
        file
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (imageId: string) => {
    setImages(images.filter((image) => image.id !== imageId));
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset subcategory when category changes
  };

  const handleSubcategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSubcategory(event.target.value);
  };

  const handleLocationClick = () => {
    // Implement location selection logic here
    // For example, open a modal or a map to choose location
    // Example: setSelectedLocation('New Location');
    setLocationModalOpen(true);
  };

  const handleAddCategory = (category: string, subcategory: string) => {
    const tag = `${category}: ${subcategory}`;
    if (!selectedCategories.includes(tag)) {
      setSelectedCategories((prev) => [...prev, tag]);
    }
  };

  const handleRemoveCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
  };

  const handlePost = () => {
    if (selectedCategories.length === 0) {
      setMessage("At least one category is required.");
      return;
    }
    if (!selectedLocation) {
      setMessage("Location is required.");
      return;
    }

    // Add post logic here
    setMessage(null); // Clear any previous messages
    handleClosePostWindow(); // Close the window after posting
  };

  if (!isOpen) return null;

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.3)"
        backdropFilter="blur(8px)"
        zIndex={999}
      />

      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="white"
        boxShadow="xl"
        borderRadius="md"
        p={4}
        className="smallheading"
        zIndex={1000}
        width={{ base: "90%", md: "60%", lg: "40%" }} // Responsive width
        height={{ base: "70%", md: "60%", lg: "60%" }} // Responsive height
        maxHeight={{ base: "70%", md: "60%", lg: "60%" }} // Responsive max height
        maxWidth={{ base: "90%", md: "60%", lg: "40%" }} // Responsive max width
      >
        <HStack justifyContent="space-between">
          <Box fontWeight="bold">Create a Post</Box>
          <HStack spacing={2} wrap="wrap">
            {selectedCategories.map((cat) => (
              <Tag
                key={cat}
                variant="solid"
                size="md"
                borderRadius="full"
                _hover={{ bg: "#f75809b3" }} // Hover color for tags
              >
                <TagLabel>{cat}</TagLabel>
                <TagCloseButton
                  onClick={() => handleRemoveCategory(cat)}
                  _hover={{ bg: "#f75809b3" }} // Hover color for close button
                />
              </Tag>
            ))}
          </HStack>
          <IconButton
            icon={<CloseIcon />}
            size="sm"
            onClick={handleClosePostWindow}
            aria-label="Close Post Window"
            _hover={{ bg: "#f75809b3" }} // Hover color for icon button
          />
        </HStack>

        <VStack spacing={4} mt={4}>
          <Textarea
            placeholder="Write something short but descriptive about your listing."
            resize="none"
            maxLength={3000}
            height="200px"
          />

          <HStack
            spacing={2}
            wrap="nowrap"
            overflowX="scroll"
            maxWidth="100%"
            css={{
              "&::-webkit-scrollbar": {
                height: "6px"
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "10px"
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555"
              }
            }}
          >
            {images.map((image) => (
              <Box
                key={image.id}
                position="relative"
                minWidth="80px"
                maxWidth="80px"
              >
                <Image
                  src={image.id}
                  alt="Uploaded"
                  boxSize="80px"
                  objectFit="cover"
                  borderRadius="md"
                />
                <IconButton
                  aria-label="Remove Image"
                  icon={<CloseIcon />}
                  size="sm"
                  position="absolute"
                  top={1}
                  right={1}
                  onClick={() => handleRemoveImage(image.id)}
                  colorScheme="red"
                  variant="outline"
                  _hover={{ bg: "#f75809b3" }} // Hover color for remove image button
                />
              </Box>
            ))}
          </HStack>
          {message && (
            <Text className="paragraph" color="red.500" mt={2} textAlign="center">
              {message}
            </Text>
          )}

          <HStack spacing={4} width="100%" justifyContent="flex-end">
            <label htmlFor="file-upload">
              <IconButton
                icon={<AttachmentIcon />}
                size="sm"
                aria-label="Add Images"
                as="span"
                disabled={images.length >= 10} // Disable button if 10 images are reached
                _hover={{ bg: "#f75809b3" }} // Hover color for add images button
              />
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </label>
            <IconButton
              icon={<FaMapMarkerAlt />}
              size="sm"
              aria-label="Add Location"
              onClick={handleLocationClick}
              _hover={{ bg: "#f75809b3" }} // Hover color for location button
            />
          </HStack>
        </VStack>

        <HStack justifyContent={"space-between"}>
          <Menu isLazy>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="outline"
              _hover={{ bg: "#f75809b3" }} // Hover color for menu button
            >
              Select Category
            </MenuButton>
            <MenuList>
              {Object.keys(categories).map((category) => (
                <Popover
                  key={category}
                  trigger="hover"
                  placement="top-end"
                  offset={[-10, 0]} // Adjusts the position of the popover
                  closeOnBlur={false}
                  closeOnEsc={false}
                >
                  <PopoverTrigger>
                    <MenuItem
                      _hover={{ bg: "#f75809b3" }} // Hover color for menu item
                    >
                      <HStack>
                        <Box>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Box>
                        <ChevronRightIcon />
                      </HStack>
                    </MenuItem>
                  </PopoverTrigger>
                  <PopoverContent
                    width="200px"
                    p={2}
                    borderRadius="md"
                    boxShadow="md"
                  >
                    <PopoverBody>
                      {categories[category].map((item) => (
                        <MenuItem
                          key={item}
                          p={2}
                          onClick={() => handleAddCategory(category, item)}
                          _hover={{ bg: "orange.100" }} // Hover color for subcategory menu items
                        >
                          {item}
                        </MenuItem>
                      ))}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              ))}
            </MenuList>
          </Menu>
          <CommonButton text={"Post your Listing!"} onClick={handlePost} />
        </HStack>
      </Box>
      <LocationModal isOpen={isLocationModalOpen} onClose={() => setLocationModalOpen(false)} />
    </>
  );
};

export default SellWindow;
