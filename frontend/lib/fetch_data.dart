import 'package:http/http.dart' as http;
import 'dart:convert';

Future<List<String>> calculateShortestPath(
    String startCity, String endCity) async {
  final response = await http.post(
    Uri.parse('http://localhost:3000/calculate-path'),
    headers: <String, String>{
      'Content-Type': 'application/json',
    },
    body: jsonEncode({'startCity': startCity, 'endCity': endCity}),
  );

  if (response.statusCode == 200) {
    final decodedResponse = jsonDecode(response.body);

    return List<String>.from(decodedResponse['shortestPath']);
  } else {
    throw Exception('Failed to calculate shortest path.');
  }
}

Future<List<Map<String, dynamic>>> fetchAllCities() async {
  final response = await http.get(Uri.parse('http://localhost:3000/cities'));
  if (response.statusCode == 200) {
    return List<Map<String, dynamic>>.from(json.decode(response.body));
  } else {
    throw Exception('Failed to fetch cities');
  }
}