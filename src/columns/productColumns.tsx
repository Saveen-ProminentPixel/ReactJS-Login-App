
export const productColumns = () => {

    const columns = [

        {
            name: "ID",
            selector: (row: { id: number; }) => row.id,
            sortable: true,
        },
        {
            name: "Title",
            selector: (row: { title: string; }) => row.title,
            sortable: true,
        },
        {
            name: "Price",
            selector: (row: { price: number; }) => row.price,
            sortable: true,
        },
        {
            name: "Rating",
            selector: (row: { rating: number; }) => row.rating,
            sortable: true,
        },
        {
            name: "Brand",
            selector: (row: { brand: string; }) => row.brand,
            sortable: true,
        },
        {
            name: "Category",
            selector: (row: { category: string; }) => row.category,
            sortable: true,
        },
        {
            name: "Image",
            cell: (row: { thumbnail: string | undefined; }) => <img src={row.thumbnail} alt="thumbnail" width="60" height="60" />
        },

    ];

    return columns;
}