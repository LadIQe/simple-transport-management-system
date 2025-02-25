import inflection
import json

from rest_framework.utils import json as rest_json
from django.utils.deprecation import MiddlewareMixin

class CamelCaseToSnakeCaseMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if request.content_type == "application/json" and hasattr(request, 'body'):
            try:
                json_data = json.loads(request.body)

                def camel_to_snake(data):
                    if isinstance(data, dict):
                        return {inflection.underscore(k): camel_to_snake(v) for k, v in data.items()}
                    elif isinstance(data, list):
                        return [camel_to_snake(item) for item in data]

                    return data

                snake_case_data = camel_to_snake(json_data)
                request._body = rest_json.dumps(snake_case_data).encode('utf-8')
            except Exception as e:
                pass
