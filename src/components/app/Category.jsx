const Category = ({
    image,
    text,
    setSelectedCategory,
    selectedCategory,
    setSelectedArea,
    setSelectedIngredient,
    setSearchParams
}) => {
    const isSelected = selectedCategory === text;

    return (
        <button
            className={`category flex flex-col items-center justify-between p-10 cursor-pointer ${isSelected ? 'active' : ''}`}
            onClick={() => {
                setSelectedCategory(text);
                setSelectedArea('');
                setSelectedIngredient('');
                setSearchParams((prev) => {
                    prev.delete("search");
                    return prev;
                });
            }}
        >
            <div className="w-[6rem]">
                <img loading="lazy" src={image} alt={text} className="mb-10 w-full" />
            </div>
            <p className="text-2xl font-semibold">{text}</p>
        </button>
    )
}

export default Category
