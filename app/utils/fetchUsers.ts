import Papa from "papaparse";

interface User {
  id: string;
  username: string;
  password: string;
  first_name: string;
  title: string;
}

export async function fetchUsersFromCSV(): Promise<User[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/employee_data.csv`);
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse<User>(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: (error: Error) => reject(error),
    });
  });
}