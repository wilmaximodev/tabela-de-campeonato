export default function mapStatusHTTP(status: string): number {
  const statusMap: Record<string, number> = {
    successful: 200,
    created: 201,
    invalidData: 400,
    notFound: 404,
    conflict: 409,
  };

  return statusMap[status] || 500;
}