export default function mapStatusHTTP(status: string): number {
  const statusMap: Record<string, number> = {
    successful: 200,
    created: 201,
    invalidData: 400,
    unauthorized: 401,
    notFound: 404,
    conflict: 409,
    inputError: 422,
  };

  return statusMap[status] || 500;
}
