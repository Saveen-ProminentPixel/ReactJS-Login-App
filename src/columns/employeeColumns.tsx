
export const employeeColumns = () => {
    
    const columns = [

        {
            name: "ID",
            selector: (row: { id: number; }) => row.id,
            sortable: true,
        },
        {
            name: "FirstName",
            selector: (row: { firstName: string; }) => row.firstName,
            sortable: true,
        },
        {
            name: "LastName",
            selector: (row: { lastName: string; }) => row.lastName,
            sortable: true,
        },
        {
            name: "Company",
            selector: (row: { company: { name: string; }; }) => row.company.name,
            sortable: true,
        },
        {
            name: "Title",
            selector: (row: { company: { title: string; }; }) => row.company.title,
            sortable: true,
        },
        {
            name: "Department",
            selector: (row: { company: { department: string; }; }) => row.company.department,
            sortable: true,
        },
        

    ];

    return columns;
}