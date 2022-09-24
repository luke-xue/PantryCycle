import haversine as hs
from haversine import Unit
import networkx as nx
import copy
import numpy as np
from pyvis.network import Network
import pandas as pd
import numpy as np
from IPython.display import display
import requests



loc1=(42.546245,1.601554)
loc2=(23.424076,53.847818)
print(hs.haversine(loc1,loc2,unit=Unit.MILES))

def plot_graph(G):
    net = Network(notebook=True)
    net.from_nx(G,show_edge_weights=True)
    net.toggle_physics(True)
    net.show('example.html')
    #return display(HTML('example.html'))

#Dijkstras
def init_temp_distances(G, source):
  """
  Initialize the temporary distances for Dijkstra's algorithm
  on G from source.

  Args:
    G (Graph): a networkx graph
    source (str): the source vertex in G
  Returns:
    temp_distances (dict): a dictionary mapping each vertex to its
      initial temporary distance from the source
  """
  temp_distances = {}
  for vertex in G:
    if vertex == source:
      temp_distances[vertex] = 0
    else:
      temp_distances[vertex] = np.Infinity
  return temp_distances
def find_next_closest_vertex(temp_distances):
  """
  Find the vertex with the minimum temporary distance.

  Args:
    temp_distances (dict): a dictionary mapping each vertex to its
      temporary distance from the source
  Returns:
    closest_vertex (str): the vertex with minimum value according 
      to temp_distances
  """
  min_distance = np.Infinity
  closest_vertex = None
  for vertex in temp_distances:
    if temp_distances[vertex] < min_distance:
      closest_vertex = vertex
      min_distance = temp_distances[vertex]
  return closest_vertex
def update_temp_distances(u, G, temp_distances):
  """
  Update temp_distances after having fixed the permanent distance
  for vertex u

  Args:
    u (str): the vertex G for which we just fixed the permanent distance
    G (Graph): a networkx graph
    temp_distances (dict): a dictionary mapping each vertex to its
      temporary distance from the source
  """
  for v in G.neighbors(u):
    if v in temp_distances:
      alt_distance = temp_distances[u] + G[u][v]['weight']
      if alt_distance < temp_distances[v]:
        temp_distances[v] = alt_distance
def dijkstra(G, source, target):
  """
  Returns the length of the shortest path between 
  source and target in G by running Dijkstra's algorithm.

  Args:
    G (Graph): a networkx graph
    source (int): the source vertex in G
    target (int): the target vertex in G
  Returns: 
    shortest_path_length (int): the length of the shortest path
      from source to target
  """

  temp_distances = init_temp_distances(G, source)
  while len(temp_distances) > 0:
    u = find_next_closest_vertex(temp_distances)
    if u == target:
      return temp_distances[u]
    update_temp_distances(u, G, temp_distances)
    temp_distances.pop(u)  

G = nx.Graph()
G.add_edge("a", "b", weight = 1)
G.add_edge("a", "c", weight = 2)
G.add_edge("a", "d", weight = 3)
G.add_edge("b", "e", weight = 1)
G.add_edge("c", "e", weight = 2)
G.add_edge("d", "e", weight = 3)

geocountry = pd.read_csv("./countries_locations.csv")




