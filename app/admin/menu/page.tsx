import { IMenu } from "@/app/types";
import { getCookies } from "@/lib/server-cookie";
import { BASE_API_URL, BASE_IMAGE_PRODUK, BASE_IMAGE_PROFILE } from "@/global";
import { get } from "@/lib/api-bridge";
import { AlertInfo } from "@/components/alert";
import Image from "next/image";
import Search from "./search";

interface MenuResponse {
  status: boolean;
  data: {
    status: boolean;
    data: IMenu[];
    message: string;
  };
}

const getMenu = async (search: string): Promise<IMenu[]> => {
  try {
    const TOKEN = await getCookies("token");
    const url = `${BASE_API_URL}/produk?search=${search}`;
    const { data } = (await get(url, TOKEN)) as MenuResponse;
    return data?.status ? data.data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const MenuPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search = searchParams.search ? searchParams.search.toString() : "";
  const menu: IMenu[] = await getMenu(search);

  const category = (cat: string): React.ReactNode => {
    if (cat === "BAJU") {
      return (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
          Baju
        </span>
      );
    }
    if (cat === "GANTUNGAN") {
      return (
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
          Gantungan
        </span>
      );
    }
    return (
      <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
        Stiker
      </span>
    );
  };

  return (
    <div>
      <div className="m-2 bg-white rounded-lg p-3 border-t-4 border-t-primary shadow-md">
        <h4 className="text-xl font-bold mb-2">Menu Data</h4>
        <p className="text-sm text-secondary mb-4">
          This page displays menu data, allowing menus to view details, search,
          and manage menu items by adding, editing, or deleting them.
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center w-full max-w-md flex-grow">
            <Search url={`/admin/menu`} search={search} />
          </div>
        </div>

        {menu.length === 0 ? (
          <AlertInfo title="Informasi">No data available</AlertInfo>
        ) : (
          <div className="m-2">
            {menu.map((data, index) => (
              <div key={`menu-${index}`} className="flex flex-wrap shadow m-2 p-2 bg-white rounded-md">
                <div className="w-full md:w-1/12 p-2">
                  <small className="text-sm font-bold text-primary">Picture</small><br />
                  <Image
                    width={40}
                    height={40}
                    src={`${BASE_IMAGE_PROFILE}/${data.foto}`}
                    className="rounded-sm overflow-hidden"
                    alt="preview"
                    unoptimized
                  />
                </div>
                <div className="w-full md:w-2/12 p-2">
                  <small className="text-sm font-bold text-primary">Name</small><br />
                  {data.nama}
                </div>
                <div className="w-full md:w-1/12 p-2">
                  <small className="text-sm font-bold text-primary">Price</small><br />
                  {data.harga}
                </div>
                <div className="w-full md:w-5/12 p-2">
                  <small className="text-sm font-bold text-primary">Description</small><br />
                  {data.deskripsi}
                </div>
                <div className="w-full md:w-1/12 p-2">
                  <small className="text-sm font-bold text-primary">Category</small><br />
                  {category(data.kategori)}
                </div>
                <div className="w-full md:w-2/12 p-2">
                  <small className="text-sm font-bold text-primary">Action</small><br />
                  {/* Add action buttons here */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;