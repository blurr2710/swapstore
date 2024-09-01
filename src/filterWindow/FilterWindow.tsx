import React, { useState } from "react";
import {
  Box,
  IconButton,
  HStack,
  VStack,
  Button,
  Checkbox,
  Text,
  Divider,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

// Example categories and subcategories data
const categoriesData = {
  Category1: ["Subcategory1.1", "Subcategory1.2", "Subcategory1.3"],
  Category2: ["Subcategory2.1", "Subcategory2.2", "Subcategory2.3"],
  Category3: ["Subcategory3.1", "Subcategory3.2", "Subcategory3.3"],
  Category4: ["Subcategory3.1", "Subcategory3.2", "Subcategory3.3"],
  Category5: ["Subcategory3.1", "Subcategory3.2", "Subcategory3.3"],
  Category6: ["Subcategory3.1", "Subcategory3.2", "Subcategory3.3"],
  Category7: ["Subcategory3.1", "Subcategory3.2", "Subcategory3.3"],
  Category8: ["Subcategory3.1", "Subcategory3.2", "Subcategory3.3"],
  Category9: ["Subcategory3.1", "Subcategory3.2", "Subcategory3.3"],
  Category10: ["Subcategory3.1", "Subcategory3.2", "Subcategory3.3"],

};

interface FilterWindowProps {
  isOpen: boolean;
  handleClosePostWindow: () => void;
}

const FilterWindow: React.FC<FilterWindowProps> = ({
  isOpen,
  handleClosePostWindow
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState<{
    [key: string]: string[];
  }>({});

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
    if (!selectedCategory) return;

    setSelectedSubcategories(prev => {
      const updatedSubcategories = { ...prev };

      if (checked) {
        if (!updatedSubcategories[selectedCategory]) {
          updatedSubcategories[selectedCategory] = [];
        }
        updatedSubcategories[selectedCategory].push(subcategory);
      } else {
        updatedSubcategories[selectedCategory] = updatedSubcategories[selectedCategory].filter(
          (sub) => sub !== subcategory
        );
      }

      return updatedSubcategories;
    });
  };

  const handleSelectAll = () => {
    if (!selectedCategory) return;

    setSelectedSubcategories((prev) => ({
      ...prev,
      [selectedCategory]: categoriesData[selectedCategory],
    }));
  };

  const handleApplyFilters = () => {
    console.log("Selected Filters:", selectedSubcategories);
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
        className="smallheading"
        p={6}
        zIndex={1000}
        width={{ base: "90%", md: "60%", lg: "40%" }}
        height={{ base: "70%", md: "60%", lg: "60%" }}
        maxHeight={{ base: "70%", md: "60%", lg: "60%" }}
        maxWidth={{ base: "90%", md: "60%", lg: "40%" }}
        border="1px solid #8947fd"
      >
        <HStack justifyContent="space-between" mb={4}>
          <Box fontWeight="bold" fontSize="xl" color="#8947fd">
            Filters
          </Box>
          <IconButton
            icon={<CloseIcon />}
            size="md"
            onClick={handleClosePostWindow}
            aria-label="Close Filter Window"
            _hover={{ bg: "#8947fd", color: "white" }}
          />
        </HStack>

        <HStack spacing={4} height="calc(100% - 100px)" overflow="hidden">
          {/* Categories List */}
          <VStack
            align="start"
            spacing={3}
            overflowY="scroll"
            height="100%"
            width="30%"
            pr={3}
            py={3}
          >
            {Object.keys(categoriesData).map((category) => (
              <Text
                key={category}
                onClick={() => handleCategoryClick(category)}
                cursor="pointer"
                px={3}
                py={2}
                borderRadius="md"
                _hover={{ bg: "#8947fd", color: "white" }}
                bg={selectedCategory === category ? "#8947fd" : "transparent"}
                color={selectedCategory === category ? "white" : "black"}
                fontWeight={selectedCategory === category ? "bold" : "normal"}
              >
                {category}
              </Text>
            ))}
          </VStack>

          <VStack align="start" spacing={2} height="100%" width="60%" px={3} py={3}>
            {selectedCategory && (
              <>
                {categoriesData[selectedCategory].map((subcategory) => (
                  <Checkbox
                    key={subcategory}
                    isChecked={
                      selectedSubcategories[selectedCategory]?.includes(
                        subcategory
                      ) || false
                    }
                    onChange={(e) =>
                      handleSubcategoryChange(subcategory, e.target.checked)
                    }
                    colorScheme="orange"
                  >
                    {subcategory}
                  </Checkbox>
                ))}
                <Button
                  size="sm"
                  onClick={handleSelectAll}
                  mt={2}
                  colorScheme="orange"
                >
                  Select All
                </Button>
              </>
            )}
          </VStack>
        </HStack>

        <Button
          mt={4}
          width="100%"
          colorScheme="orange"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
      </Box>
    </>
  );
};

export default FilterWindow;
